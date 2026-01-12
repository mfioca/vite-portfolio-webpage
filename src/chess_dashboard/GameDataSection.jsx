import React, { useState } from 'react';
import useFetchJsonData from './useFetchJsonData';
import { BodyContainer, DividerLine } from '../SharedComponents';

import { PaginatedTable, CandleChart, LineChart } from './chess_components.jsx';


const formatGameData = (row) => {
  const percentFields = [
    "Accuracy",
    "Accuracy High",
    "Accuracy Low",
    "Accuracy Win",
    "Accuracy Win High",
    "Accuracy Win Low",
    "Accuracy Loss",
    "Accuracy Loss High",
    "Accuracy Loss Low",
    
    "Accuracy White",
    "Accuracy White High",
    "Accuracy White Low",
    "Accuracy White Win",
    "Accuracy White Win High",
    "Accuracy White Win Low",

    "Accuracy White Lost",
    "Accuracy White Loss High",
    "Accuracy White Loss Low",

    "Accuracy Black",
    "Accuracy Black High",
    "Accuracy Black Low",
    "Accuracy Black Win",
    "Accuracy Black Win High",
    "Accuracy Black Win Low",
  ];

  const wholeNumberFields = [
    "Game Rating",
    "Game Rating High",
    "Game Rating Low",
    "Game Rating Win",
    "Game Rating Lost",
    "Game Rating White",
    "Game Rating Black",
    "Game Rating White Win",
    "Game Rating Black Win",
    "Game Rating White Lost",
    "Game Rating Black Lost",
  ];

  const percent2dpFields = [
    "Win-Rate",
    "Win-rate White",
    "Win-rate Black",
  ];

  const formatted = {};

  for (const key in row) {
    let value = row[key];

    // Normalize empty strings
    if (value === "") {
      formatted[key] = null;
      continue;
    }

    if (percentFields.includes(key)) {
      formatted[key] = Number.isFinite(+value)
        ? `${Math.round(Number(value))}%`
        : value;
      continue;
    }

    if (wholeNumberFields.includes(key)) {
      formatted[key] = Number.isFinite(+value)
        ? Math.round(Number(value))
        : value;
      continue;
    }

    if (percent2dpFields.includes(key)) {
      formatted[key] = Number.isFinite(+value)
        ? `${(Number(value) * 100).toFixed(2)}%`
        : value;
      continue;
    }


    // Default passthrough for now
    formatted[key] = value;
  }

  return formatted;
};

const accuracyRangeOptions = [
  {
    key: 'all',
    label: 'All Games',
    title: 'Accuracy Range by Opponent Rating',
    highField: 'Accuracy High',
    lowField: 'Accuracy Low'
  },
  {
    key: 'white',
    label: 'White Games',
    title: 'Accuracy Range by Opponent Rating (As White)',
    highField: 'Accuracy White High',
    lowField: 'Accuracy White Low'
  },
  {
    key: 'black',
    label: 'Black Games',
    title: 'Accuracy Range by Opponent Rating (As Black)',
    highField: 'Accuracy Black High',
    lowField: 'Accuracy Black Low'
  }
];

const accuracyAverageOptions = [
  {
    key: 'all',
    label: 'All Games',
    title: 'Average Accuracy by Opponent Rating',
    valueField: 'Accuracy'
  },
  {
    key: 'white',
    label: 'White Games',
    title: 'Average Accuracy by Opponent Rating (As White)',
    valueField: 'Accuracy White'
  },
  {
    key: 'black',
    label: 'Black Games',
    title: 'Average Accuracy by Opponent Rating (As Black)',
    valueField: 'Accuracy Black'
  }
];

/***********************************************************************************/
/*                          GameDataSection Component                               */
/***********************************************************************************/


const GameDataSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Game%20Data"
  );

  const [selectedAccuracyRange, setSelectedAccuracyRange] = useState(
    accuracyRangeOptions[0]
  );

  const [selectedAccuracyAverage, setSelectedAccuracyAverage] = React.useState(
    accuracyAverageOptions[0]
  );

  return (
    <div className="box-style-standard standard-padding-margin">
      <div>
        <h2>Game Data</h2>
        { loading && <p>Loading data...</p>}
        { error && <p>Error: {error}</p>}
        {data && (
          <div className="flex-wrap-center gap-20">
            <div className="flex-column-center">
              <select
                value={ selectedAccuracyRange.key }
                onChange={(e) =>
                  setSelectedAccuracyRange(
                    accuracyRangeOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin"
              >
                {accuracyRangeOptions.map(opt => (
                  <option key= {opt.key } value={ opt.key }>
                    { opt.label }
                  </option>
                ))}
              </select>
              <div className="flex-column-center test-box">
                <CandleChart
                  title={ selectedAccuracyRange.title }
                  rawData={ data }
                  datalabels={ false }
                  labelField="Opponent rating"
                  highField={ selectedAccuracyRange.highField }
                  lowField={ selectedAccuracyRange.lowField }
                />
              </div>
            </div>
            <div className="flex-column-center">
              <select
                value={ selectedAccuracyAverage.key }
                onChange={(e) =>
                  setSelectedAccuracyAverage(
                    accuracyAverageOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin"
              >
                {accuracyAverageOptions.map(opt => (
                  <option key={ opt.key } value={ opt.key }>
                    { opt.label }
                  </option>
                ))}
              </select>
              <div className="flex-column-center test-box">
                <LineChart
                  title={ selectedAccuracyAverage.title }
                  rawData={ data }
                  xField="Opponent rating"
                  yField={ selectedAccuracyAverage.valueField }
                  yMin={ 0 }
                  yMax={ 100 }
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <DividerLine/>
      <div>
        {data && (
          <PaginatedTable
            data={ data.map(formatGameData) }
            rowsPerPage={ 15 }
            title="Game Data"
          />
        )}
      </div>
    </div>
  );
};

export default GameDataSection;


/*
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
        </>
        )}
*/