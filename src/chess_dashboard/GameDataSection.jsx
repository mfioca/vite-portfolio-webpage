import React, { useState } from 'react';
import useFetchJsonData from './useFetchJsonData';
import { CandleChart } from './chess_components';

const GameDataSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Game%20Data"
  );

  return (
    <div className="box-style-standard standard-padding-margin">
      <h2>Game Data</h2>
      { loading && <p>Loading data...</p>}
      { error && <p>Error: {error}</p>}
      {data && (
        <>
          <CandleChart
            title="Accuracy Highs and Lows by Opponent Rating"
            rawData={ data }
            datalabels={ false }
            labelField="Opponent rating"
            highField="Accuracy High"
            lowField="Accuracy Low"
          />
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            background: '#f8f8f8',
            padding: '10px',
            borderRadius: '8px',
            overflow: 'auto',
            maxHeight: '400px'
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
};

export default GameDataSection;