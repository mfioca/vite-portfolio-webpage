import React from 'react';
import useFetchJsonData from './useFetchJsonData';
import BarChart from './BarChart';



const formatOpponentData = (row) => {
  const percentFields = [
    "Win %",
    "Draw %",
    "Loss %",
    "Brilliant Move Frequency By Game",
    "Expected Win Rate vs This Opponent",
    "Performance Delta"
  ];

  const percent2dpFields = [
    "Avg Accuracy",
    "Avg Accuracy Win",
    "Avg Accuracy Loss",
    "Accuracy Delta"
  ];

  const fixed2dpFields = [
    "Move Count Consistency (StdDev)",
    "Accuracy Variability (Consistency Score)"
  ];

  const formatted = {};
  for (const key in row) {
    let value = row[key];

    if (value === "") {
      formatted[key] = null;
      continue;
    }

    if (percentFields.includes(key)) {
      formatted[key] = `${Math.round(parseFloat(value) * 100)}%`;
    } else if (percent2dpFields.includes(key)) {
      formatted[key] = `${parseFloat(value).toFixed(2)}%`;
    } else if (fixed2dpFields.includes(key)) {
      formatted[key] = parseFloat(value).toFixed(2);
    } else {
      formatted[key] = Number.isFinite(+value) ? parseInt(value) : value;
    }
  }

  return formatted;
};


const OpponentDataSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Opponent%20data"
  );




  return (
    <div className="box-style-standard standard-padding-margin">
      <h2>Opponent Data</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div style={{ marginBottom: "2rem" }}>
          <BarChart
            title="Average Accuracy by Opponent Rating"
            rawData={data}
            labelField="Opponent Rating"
            valueField="Avg Accuracy"
            color="rgba(54, 162, 235, 0.6)"
            datalabels={false}
            yMax={100}
          />
        </div>
      )}
      {data && (
        <pre style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          background: '#f8f8f8',
          padding: '10px',
          borderRadius: '8px',
          overflow: 'auto',
          maxHeight: '400px'
        }}>
          {JSON.stringify(data.map(formatOpponentData), null, 2)}
        </pre>
      )}
    </div>
  );
};

export default OpponentDataSection;