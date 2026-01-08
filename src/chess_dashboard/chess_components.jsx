import React, { useState } from 'react';
import './Chess.css';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJSReact } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement
);




export const PaginatedTable = ({ data, rowsPerPage = 25, title }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const keys = Object.keys(data[0]);

  return (
    <>
      <h2>{ title }</h2>
      <div className="game-archive-table-container">
        <table className="game-archive-table">
          <thead>
            <tr>
              {keys.map((key) => (
                <th key={ key }>{ key }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={ rowIndex }>
                {keys.map((key, colIndex) => (
                  <td key={ colIndex }>{ row[key] }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          className="button"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={ currentPage === 1 }
        >
          Previous
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page { currentPage } of { totalPages }
        </span>
        <button
          className="button"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={ currentPage === totalPages }
        >
          Next
        </button>
      </div>
    </>
  );
};


export const BarChart = ({
  title,
  rawData = [],
  labelField,
  valueField,
  color = 'rgba(54, 162, 235, 0.6)',
  datalabels = false,
  yMax = 100,
  yMin = 0
}) => {

  const cleanedData = rawData
      .filter(row => row[labelField] && row[valueField])
      .map(row => ({
          label: row[labelField].toString(),
          value: parseFloat(row[valueField])
      }))
      .sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true }));

  const chartData = {
  labels: cleanedData.map(entry => entry.label),
  datasets: [
      {
      label: title,
      data: cleanedData.map(entry => entry.value),
      backgroundColor: color,
      borderColor: color.replace('0.6', '1'),
      borderWidth: 1
      }
  ]
  };

  const chartOptions = {
      responsive: true,
      plugins: {
          legend: { display: false },
          title: { display: true, text: title },
          tooltip: { enabled: true },
          datalabels: { display: datalabels }
      },
      scales: {
          y: {
              min: yMin,
              max: yMax
          }
      }
  };

  return <Bar className="bar-chart" data={ chartData } options={ chartOptions } />;
};

export const CandleChart = ({
  title,
  rawData = [],
  labelField,
  highField,
  lowField,
  datalabels = false,
}) => {

  const cleanedData = rawData
    .filter(
      row =>
        row[labelField] != null &&
        row[highField] != null &&
        row[lowField] != null
    )
    .map(row => ({
      x: Number(row[labelField]),        // ✅ numeric
      o: Number(row[lowField]),
      h: Number(row[highField]),
      l: Number(row[lowField]),
      c: Number(row[highField])
    }))
    .sort((a, b) => a.x - b.x);

  const data = {

    datasets: [
      {
        label: title,
        type: 'candlestick',              // ✅ REQUIRED
        data: cleanedData,
        color: {
          up: '#26a69a',
          down: '#ef5350',
          unchanged: '#999'
        }
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: title },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        callbacks: {
          label: (ctx) => {
            const { x, l, h } = ctx.raw;
            return `Rating: ${x} | Accuracy: ${l.toFixed(1)}–${h.toFixed(1)}`;
          }
        }
      },
      datalabels: { display: datalabels }
    },
    scales: {
      x: {
        type: 'linear',
        ticks: { precision: 0 }
      },
      y: {
        min: 50,
        max: 100,
        title: { display: true, text: 'Accuracy' }
      }
    }
  };

  return (
    <div className="candlestick-chart">
      <ChartJSReact data={ data } options={ options } />
    </div>
  );
};