import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({
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

    return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;