import React, { useState } from 'react';
import { BodyContainer, DividerLine } from '../SharedComponents';
import { PaginatedTable, BarChart } from './chess_components';
import useFetchJsonData from './useFetchJsonData';



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
      <div>
      <h2>Opponent Data</h2>
      { loading && <p>Loading data...</p> }
      { error && <p>Error: { error }</p> }
      {data && (
        <div>
          <BarChart
            title="Average Accuracy by Opponent Rating"
            rawData={ data }
            labelField="Opponent Rating"
            valueField="Avg Accuracy"
            color="rgba(54, 162, 235, 0.6)"
            datalabels={ false }
            yMin={ 50 }
            yMax={ 100 }
          />
        </div>
      )}
      </div>
      <DividerLine/>
      <div>
        {data && (
          <PaginatedTable
            data={ data.map(formatOpponentData) }
            rowsPerPage={ 15 }
            title="Opponent Data"
          />
        )}
      </div>
    </div>
  );
};

export default OpponentDataSection;

