import React, { useState } from 'react';
import './Chess.css';

import { Bar, Line, Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,      // ← add
  PointElement,     // ← add
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import {
  CandlestickController,
  CandlestickElement
} from 'chartjs-chart-financial';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,      // ← add
  PointElement,     // ← add
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
      maintainAspectRatio: false,
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

  return (
  <div className="bar-chart">
    <Bar  data={ chartData } options={ chartOptions } />;
  </div>
  );
};

export const LineChart = ({
  title,
  rawData = [],
  datalabels = false,
  xField,
  yField,
  yMin,
  yMax
}) => {

  const cleanedData = rawData
    .filter(row => row[xField] != null && row[yField] != null)
    .map(row => ({
      x: Number(row[xField]),
      y: Number(row[yField])
    }))
    .sort((a, b) => a.x - b.x);

  const chartData = {
    datasets: [
      {
        label: title,
        data: cleanedData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.2,
        pointRadius: 3
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: title },
      tooltip: { enabled: true },
      datalabels: { display: datalabels }
    },
    scales: {
      x: {
        type: 'linear',
        title: { display: true, text: 'Opponent rating' },
        ticks: { precision: 0 }
      },
      y: {
        title: { display: true, text: 'Average number of moves' },
        min: yMin,
        max: yMax
      }
    }
  };

  return (
    <div className="line-chart">
      <Line data={ chartData } options={ chartOptions } />
    </div>
  );
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
    x: Number(row[labelField]),
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
        clip: false,
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
        ticks: {
          precision: 0,
          autoSkip: false
        },
        grid: {
          offset: false
        }
      },
      y: {
        min: 20,
        max: 100,
        title: { display: true, text: 'Accuracy' }
      }
    }
  };

  return (
    <div className="candlestick-chart">
      <Chart type="candlestick" data={ data } options={ options } />
    </div>
  );
};

export const StackedPercentBarChart = ({
  title,
  rawData = [],
  labelField,
  valueFields = [],
  datalabels = false,
  colorMap = null   // ← ADD (optional)
}) => {
  const colors = [
    '#6c3483', // brilliant
    '#27ae60', // great
    '#3498db', // best
    '#5dade2', // excellent
    '#85c1e9', // good
    '#aeb6bf', // book
    '#f4d03f', // inaccuracy
    '#e67e22', // mistake
    '#e74c3c', // miss
    '#c0392b'  // blunder
  ];

  const cleanedData = rawData
    .filter(row => row[labelField] != null)
    .map(row => {
      const total = valueFields.reduce(
        (sum, field) => sum + Number(row[field] || 0),
        0
      );

      const normalized = {};
      valueFields.forEach(field => {
        normalized[field] = total > 0
          ? (Number(row[field] || 0) / total) * 100
          : 0;
      });

      return {
        label: row[labelField],
        ...normalized
      };
    })
    .sort((a, b) => Number(a.label) - Number(b.label));


  const datasets = valueFields.map((field, index) => {
    const color =
      colorMap && typeof colorMap === 'object'
        ? Array.isArray(colorMap)
          ? colorMap[index]
          : colorMap[field]
        : colors[index];

    return {
      label: field,
      data: cleanedData.map(row => row[field]),
      stack: 'stack1',
      backgroundColor: color,
      borderColor: color
    };
  });

  const chartData = {
    labels: cleanedData.map(row => row.label),
    datasets
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: true, text: title },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ ctx.dataset.label }: ${ ctx.parsed.y.toFixed(1) }%`
        }
      },
      datalabels: { display: datalabels }
    },
    scales: {
      x: {
        stacked: true,
        title: { display: true, text: labelField }
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          callback: (v) => `${v}%`
        },
        title: { display: true, text: 'Percentage of Moves' }
      }
    }
  };

  return (
    <div className="line-chart">
      <Bar data={ chartData } options={ chartOptions } />
    </div>
  );
};