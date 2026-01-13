import React, { useState } from 'react';
import useFetchJsonData from './useFetchJsonData';
import { BodyContainer } from '../SharedComponents';
import { GameArchiveTable } from './chess_components.jsx';

const formatGameArchiveData = (row) => {
  const percentFields = [
    "accuracy"
  ]

  const percent2dpFields = [
    "move quality good",
    "move quality bad",
  ];

  const fixed2dpFields = [
  ];

  const formatted = {};
  for (const key in row) {
    let value = row[key];

    if (value === "") {
      formatted[key] = null;
      continue;
    }

    if (percentFields.includes(key)) {
      formatted[key] = `${Math.round(parseFloat(value))}%`;
    } else if (percent2dpFields.includes(key)) {
      formatted[key] = `${(parseFloat(value) * 100).toFixed(2)}%`;
    } else if (fixed2dpFields.includes(key)) {
      formatted[key] = parseFloat(value).toFixed(2);
    } else {
      formatted[key] = Number.isFinite(+value) ? parseInt(value) : value;
    }
  }

  return formatted;
};

const GameArchiveSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Game%20Archive"
  );

  return (
    <BodyContainer>
      { loading && <p>Loading data...</p> }
      { error && <p>Error: { error }</p> }
      {data && (
        <GameArchiveTable
          data={ data.map(formatGameArchiveData) }
          rowsPerPage={ 20 }
          title="Game Archive"
        />
      )}
    </BodyContainer>
  );
};

export default GameArchiveSection;