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
  const [isTableOpen, setisTableOpen] = useState(false);

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
      <h2
        className="toggle-gallery-title"
        onClick={() => setisTableOpen(prev => !prev)}
        style={{ cursor: "pointer" }}
      >
        {isTableOpen ? `▼ ${title}` : `▶ ${title}`}
      </h2>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        ( <i>Click to view full data table</i> )
      </p>
      {isTableOpen && (
        <>
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
      )}
    </>
  );
};

export const GameArchiveTable = ({ data, rowsPerPage = 25, title }) => {
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
    <div className="chart2-container">
      <Bar  data={ chartData } options={ chartOptions } />
    </div>
  );
};


export const FullWidthBarChart = ({
  title,
  rawData = [],
  labelField,
  valueField,
  color = 'rgba(54, 162, 235, 0.6)',
  datalabels = false,
  yTickFormatter,
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
        backgroundColor: cleanedData.map(d =>
          d.value < 0
            ? 'rgba(231, 76, 60, 0.6)'   // negative
            : color                      // positive
        ),
        borderColor: cleanedData.map(d =>
          d.value < 0
            ? 'rgba(231, 76, 60, 1)'
            : color.replace('0.6', '1')
        ),
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false, text: title },
      tooltip: { enabled: true },
      datalabels: { display: datalabels }
    },
    scales: {
      y: {
        min: yMin,
        max: yMax,
        beginAtZero: false,
        ticks: yTickFormatter
          ? { callback: yTickFormatter }
          : undefined
      }
    }
  };

  return (
  <div className="full-width-chart-container">
    <Bar  data={ chartData } options={ chartOptions } />
  </div>
  );
};

export const GroupedBarChart = ({
  title,
  rawData = [],
  labelField,
  valueFields = [],   // e.g. ['Average moves Win', 'Average moves Loss']
  datalabels = false,
  yMin = 0,
  yMax,
  yTickFormatter = null   
}) => {
  // group by labelField
  const grouped = {};

  rawData.forEach(row => {
    const label = row[labelField];
    if (label == null) return;

    if (!grouped[label]) grouped[label] = {};

    valueFields.forEach(field => {
      const value = Number(row[field]);
      if (!Number.isFinite(value)) return;
      grouped[label][field] = value;
    });
  });

  const labels = Object.keys(grouped)
    .sort((a, b) => Number(a) - Number(b));

  const datasets = valueFields.map((field, index) => ({
    label: field,
    data: labels.map(label => grouped[label]?.[field] ?? null),
    backgroundColor: index === 0
      ? 'rgba(54, 162, 235, 0.6)'
      : 'rgba(231, 76, 60, 0.6)',
    borderColor: index === 0
      ? 'rgba(54, 162, 235, 1)'
      : 'rgba(231, 76, 60, 1)',
    borderWidth: 1
  }));

  const chartData = { labels, datasets };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: true, text: title },
      tooltip: { enabled: true },
      datalabels: { display: datalabels }
    },
    scales: {
      x: {
        title: { display: true, text: labelField }
      },
      y: {
        min: yMin,
        max: yMax,
        ticks: yTickFormatter
          ? { callback: yTickFormatter }
          : undefined
      }
    }
  };

  return (
    <div className="chart2-container">
      <Bar data={ chartData } options={ chartOptions } />
    </div>
  );
};

export const LineChart = ({
  title,
  rawData = [],
  datalabels = false,
  metricLabel,
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
        title: { display: true, text: metricLabel },
        min: yMin,
        max: yMax
      }
    }
  };

  return (
    <div className="chart2-container">
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
  metricLabel,
  yMax = 100,
  yMin = 0
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
        type: 'candlestick',              
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
            return `Rating: ${x} | ${metricLabel}: ${l.toFixed(0)}–${h.toFixed(0)}`;
          }
        }
      },
      datalabels: { display: datalabels }
    },
    scales: {
      x: {
        type: 'linear',
        title: { display: true, text: 'Opponent Rating' },
        ticks: {
          precision: 0,
          autoSkip: false
        },
        grid: {
          offset: false
        }
      },
      y: {
        min: yMin,
        max: yMax,
        title: { display: true, text: metricLabel }
      }
    }
  };

  return (
    <div className="chart2-container">
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
    <div className="chart2-container">
      <Bar data={ chartData } options={ chartOptions } />
    </div>
  );
};