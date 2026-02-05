
import React, { useState } from 'react';
import { BodyContainer, DividerLine } from '../SharedComponents';
import { PaginatedTable, BarChart, FullWidthBarChart } from './chess_components';
import useFetchJsonData from './useFetchJsonData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const formatOpponentData = (row) => {
  const percentFields = [
    "Win %",
    "Draw %",
    "Loss %",
    "Brilliant Move Frequency By Game"
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

  const percentAlreadyFields = [
    "Expected Win Rate vs This Opponent"
  ];

  const ratioPercentFields = [
    "Performance Delta"
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
    } else if (percentAlreadyFields.includes(key)) {
      formatted[key] = `${parseFloat(value).toFixed(2)}%`;
    } else if (ratioPercentFields.includes(key)) {
      formatted[key] = `${Math.round(parseFloat(value) * 100)}%`; 
    } else {
      formatted[key] = Number.isFinite(+value) ? parseInt(value) : value;
    }
  }

  return formatted;
};

const opponentMetricOptions = [
  {
    key: 'avgAccuracy',
    label: 'Avg Accuracy',
    displayTitle: 'Average Accuracy by Opponent',
    valueField: 'Avg Accuracy',
    yMin: 50,
    yMax: 100,
    yTickFormatter: (v) => `${v}%`
  },
  {
    key: 'performanceDelta',
    label: 'Performance Delta',
    displayTitle: 'Performance Delta by Opponent',
    valueField: 'Performance Delta',
    yMin: -1,
    yMax: 1,
    yTickFormatter: (v) => `${(v * 100).toFixed(2)}%`
  },
  {
    key: 'expectedWinRate',
    label: 'Expected Win Rate',
    displayTitle: 'Expected Win Rate by Opponent',
    valueField: 'Expected Win Rate vs This Opponent',
    yMin: 0,
    yMax: 100,
    yTickFormatter: (v) => `${v}%`
  },
  {
    key: 'moveQualityRatio',
    label: 'Move Quality Ratio',
    displayTitle: 'Move Quality Ratio by Opponent',
    valueField: 'Move Quality Ratio',
    yMin: 0,
    yMax: 50,              
    yTickFormatter: (v) => v.toFixed(1)
  },
  {
    key: 'errorSuppressionScore',
    label: 'Error Suppression Score',
    displayTitle: 'Error Suppression Score by Opponent',
    valueField: 'Error Suppression Score',
    yMin: 0,
    yMax: 100,              
    yTickFormatter: (v) => v.toFixed(1)
  }
];

const opponentAltMetricOptions = [
  {
    key: 'avgAccuracy',
    label: 'Avg Accuracy',
    displayTitle: 'Average Accuracy by Opponent',
    valueField: 'Avg Accuracy',
    yMin: 50,
    yMax: 100,
    yTickFormatter: (v) => `${v}%`
  },
  {
    key: 'gameRatingAvg',
    label: 'Game Rating Avg',
    displayTitle: 'Average Game Rating by Opponent',
    valueField: 'Game Rating Avg',
    yMin: 500,
    yMax: 2000
  },
  {
    key: 'moveQualityRatio',
    label: 'Move Quality Ratio',
    displayTitle: 'Move Quality Ratio by Opponent',
    valueField: 'Move Quality Ratio',
    yMin: 0,
    yMax: 90,
    yTickFormatter: (v) => v.toFixed(1)
  },
  {
    key: 'errorSuppressionScore',
    label: 'Error Suppression Score',
    displayTitle: 'Error Suppression Score by Opponent',
    valueField: 'Error Suppression Score',
    yMin: 0,
    yMax: 100,
    yTickFormatter: (v) => v.toFixed(1)
  },
  {
    key: 'brilliantFrequency',
    label: 'Brilliant Move Frequency',
    displayTitle: 'Brilliant Move Frequency by Opponent',
    valueField: 'Brilliant Move Frequency By Game',
    yMin: 0,
    yMax: 1,
    yTickFormatter: (v) => `${(v * 100).toFixed(1)}%`
  }
];

const OpponentDataSection = () => {
  const {
    data: data,
    loading: loading,
    error: error
  } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Opponent%20data"
  );

  const {
    data: altdata
  } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Opponent%20Data%202"
  );

  const [selectedMetric, setSelectedMetric] = useState(opponentMetricOptions[0]);

  return (
    <div className="box-style-standard standard-padding-margin">
      <div>
        <h2>Opponent Data</h2>
        <Tabs className="standard-tabs">
          <TabList className="grid-tablist">
            <Tab>By Rating</Tab>
            <Tab>By Opponent (Condensed)</Tab>
          </TabList>
          <TabPanel>
            <BodyContainer hasBackground = { true }>
              <select
                value={ selectedMetric.key }
                onChange={(e) =>
                  setSelectedMetric(
                    opponentMetricOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin center-margin"
              >
                {opponentMetricOptions.map(opt => (
                  <option key={ opt.key } value={ opt.key }>
                    { opt.label }
                  </option>
                ))}
              </select>
              <p
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '0px',
                  marginTop: '4px'
                }}
              >
                { selectedMetric.displayTitle }
              </p>
              {data && (
                <div className="chesschart-scroll-x">
                  <FullWidthBarChart
                    rawData={ data }
                    labelField="Opponent"
                    valueField={ selectedMetric.valueField }
                    color="rgba(54, 162, 235, 0.6)"
                    datalabels={ false }
                    yMin={ selectedMetric.yMin }
                    yMax={ selectedMetric.yMax }
                    yTickFormatter={ selectedMetric.yTickFormatter }
                  />
                </div>
              )}
            <DividerLine/>
            {data && (
              <PaginatedTable
                data={ data.map(formatOpponentData) }
                rowsPerPage={ 15 }
                title="Opponent Data Table"
              />
            )}
            </BodyContainer>
          </TabPanel>
          <TabPanel>
            <BodyContainer>
              <select
                value={ selectedMetric.key }
                onChange={(e) =>
                  setSelectedMetric(
                    opponentAltMetricOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin center-margin"
              >
                {opponentAltMetricOptions.map(opt => (
                  <option key={ opt.key } value={ opt.key }>
                    { opt.label }
                  </option>
                ))}
              </select>
              <p
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '0px',
                  marginTop: '4px'
                }}
              >
                { selectedMetric.displayTitle }
              </p>
              {altdata && (
                <div className="chesschart-scroll-x">
                  <FullWidthBarChart
                    rawData={ altdata }
                    labelField="Opponent"
                    valueField={ selectedMetric.valueField }
                    color="rgba(54, 162, 235, 0.6)"
                    datalabels={ false }
                    yMin={ selectedMetric.yMin }
                    yMax={ selectedMetric.yMax }
                    yTickFormatter={ selectedMetric.yTickFormatter }
                  />
                </div>
              )}
              
              
            </BodyContainer>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OpponentDataSection;



/*
return (
    <div className="box-style-standard standard-padding-margin">
      <div>
      <h2>Opponent Data</h2>
      <select
        value={selectedMetric.key}
        onChange={(e) =>
          setSelectedMetric(
            opponentMetricOptions.find(opt => opt.key === e.target.value)
          )
        }
        className="standard-margin center-margin"
      >
        {opponentMetricOptions.map(opt => (
          <option key={opt.key} value={opt.key}>
            {opt.label}
          </option>
        ))}
      </select>
      <p
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '0px',
          marginTop: '4px'
        }}
      >
        { selectedMetric.displayTitle }
      </p>
      {data && (
        <div className="chesschart-scroll-x">
          <FullWidthBarChart
            rawData={ data }
            labelField="Opponent"
            valueField={ selectedMetric.valueField }
            color="rgba(54, 162, 235, 0.6)"
            datalabels={ false }
            yMin={ selectedMetric.yMin }
            yMax={ selectedMetric.yMax }
            yTickFormatter={ selectedMetric.yTickFormatter }
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
        
        {data && (
          <PaginatedTable
            data={ altdata.map(formatOpponentData) }
            rowsPerPage={ 15 }
            title="Opponent Data 2"
          />
        )}
      </div>
    </div>
  );
};
*/