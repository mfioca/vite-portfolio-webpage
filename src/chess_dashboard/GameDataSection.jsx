import React, { useState } from 'react';
import useFetchJsonData from './useFetchJsonData';
import { BodyContainer, DividerLine } from '../SharedComponents';

import { ChessSectionTable, CandleChart, LineChart } from './chess_components.jsx';


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

const gameRatingRangeOptions = [
  {
    key: 'all',
    label: 'All Games',
    title: 'Game Rating Range by Opponent Rating',
    highField: 'Game Rating High',
    lowField: 'Game Rating Low'
  },
  {
    key: 'white',
    label: 'White Games',
    title: 'Game Rating Range by Opponent Rating (As White)',
    highField: 'Game Rating White High',
    lowField: 'Game Rating White Low'
  },
  {
    key: 'black',
    label: 'Black Games',
    title: 'Game Rating Range by Opponent Rating (As Black)',
    highField: 'Game Rating Black High',
    lowField: 'Game Rating Black Low'
  }
];

const gameRatingAverageOptions = [
  {
    key: 'all',
    label: 'All Games',
    title: 'Average Game Rating by Opponent Rating',
    valueField: 'Game Rating'
  },
  {
    key: 'white',
    label: 'White Games',
    title: 'Average Game Rating by Opponent Rating (As White)',
    valueField: 'Game Rating White'
  },
  {
    key: 'black',
    label: 'Black Games',
    title: 'Average Game Rating by Opponent Rating (As Black)',
    valueField: 'Game Rating Black'
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

  const [selectedAccuracyAverage, setSelectedAccuracyAverage] = useState(
    accuracyAverageOptions[0]
  );

  const [selectedGameRatingRange, setSelectedGameRatingRange] = useState(
    gameRatingRangeOptions[0]
  );

  const [selectedGameRatingAverage, setSelectedGameRatingAverage] = useState(
    gameRatingAverageOptions[0]
  );

  const avgAccuracy =
    data && data.length
      ? (
          data.reduce(
            (sum, row) => sum + (Number(row["Accuracy"]) || 0),
            0
          ) / data.length
        ).toFixed(2)
      : null;

  const avgGameRating =
    data && data.length
      ? Math.round(
          data.reduce(
            (sum, row) => sum + (Number(row["Game Rating"]) || 0),
            0
          ) / data.length
        )
      : null;
  
  return (
    <div className="box-style-standard standard-padding-margin">
      <div>
        <h2>Game Data</h2>
        { loading && <p>Loading data...</p>}
        { error && <p>Error: { error }</p>}
        {data && (
          <div className="game-data-summary">
            <div className="game-data-summary-item">
              <span className="game-data-summary-label">
                Average Accuracy
              </span>
              <span className="game-data-summary-value">
                { avgAccuracy }%
              </span>
            </div>
            <div className="game-data-summary-item">
              <span className="game-data-summary-label">
                Average Game Rating
              </span>
              <span className="game-data-summary-value">
                { avgGameRating }
              </span>
            </div>
          </div>
        )}
        {data && (
          <div className="chesschart-wrap">
            <div className="chesschart-box">
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
                <CandleChart
                  title={ selectedAccuracyRange.title }
                  rawData={ data }
                  datalabels={ false }
                  metricLabel="Accuracy"
                  labelField="Opponent rating"
                  highField={ selectedAccuracyRange.highField }
                  lowField={ selectedAccuracyRange.lowField }
                  yMin ={ 20 }
                  yMax ={ 100 }
                />
            </div>
            <div className="chesschart-box">
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
                <LineChart
                  title={ selectedAccuracyAverage.title }
                  rawData={ data }
                  metricLabel="Average Game Accuracy"
                  xField="Opponent rating"
                  yField={ selectedAccuracyAverage.valueField }
                  yMin={ 0 }
                  yMax={ 100 }
                />
            </div>
            <div className="chesschart-box">
              <select
                value={ selectedGameRatingRange.key }
                onChange={(e) =>
                  setSelectedGameRatingRange(
                    gameRatingRangeOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin"
              >
                {gameRatingRangeOptions.map(opt => (
                  <option key= {opt.key } value={ opt.key }>
                    { opt.label }
                  </option>
                ))}
              </select>
                <CandleChart
                  title={ selectedGameRatingRange.title }
                  rawData={ data }
                  datalabels={ false }
                  metricLabel="Game Rating"
                  labelField="Opponent rating"
                  highField={ selectedGameRatingRange.highField }
                  lowField={ selectedGameRatingRange.lowField }
                  yMin ={ 100 }
                  yMax ={ 2000 }
                />
            </div>
            <div className="chesschart-box">
              <select
                value={ selectedGameRatingAverage.key }
                onChange={(e) =>
                  setSelectedGameRatingAverage(
                    gameRatingAverageOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin"
              >
                {gameRatingAverageOptions.map(opt => (
                  <option key={ opt.key } value={ opt.key }>
                    { opt.label }
                  </option>
                ))}
              </select>
                <LineChart
                  title={ selectedGameRatingAverage.title }
                  rawData={ data }
                  metricLabel="Average Game Rating"
                  xField="Opponent rating"
                  yField={ selectedGameRatingAverage.valueField }
                  yMin={ 100 }
                  yMax={ 2000 }
                />
            </div>
          </div>
        )}
      </div>
      <DividerLine/>
      <div>
        {data && (
          <ChessSectionTable
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
