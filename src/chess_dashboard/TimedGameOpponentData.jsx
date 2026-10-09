import { useState } from 'react';
import { ChessSectionTable, FullWidthBarChart } from './chess_components.jsx';
import { BodyContainer } from '../SharedComponents';
import useFetchJsonData from './useFetchJsonData';


const formatTimedGameOpponentData = (row) => {
    const percentFields = [
        "Win %",
        "Draw %",
        "Loss %",
        "Brilliant Move Frequency By Game"
    ];

    const accuracyFields = [
        "Avg Accuracy",
        "Avg Accuracy Win",
        "Avg Accuracy Loss"
    ];

    const wholeNumberFields = [
        "Games Played",
        "Game Rating Avg",
        "Game Rating High",
        "Game Rating Low",
        "Game Rating Win",
        "Game Rating Loss",
        "Game Rating Draw"
    ];

    const fixed2dpFields = [
        "Accuracy Delta",
        "Move Count Average",
        "Move Quality Ratio",
        "Error Suppression Score",
        "Move Count Consistency (StdDev)",
        "Accuracy Variability (Consistency Score)"
    ];

    const formatted = {};

    for (const key in row) {
        const value = row[key];

        if (value === "" || value == null) {
            formatted[key] = null;
            continue;
        }

        if (key === "Time Control" || key === "Opponent") {
            formatted[key] = value;
            continue;
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            formatted[key] = value;
        } else if (percentFields.includes(key)) {
            formatted[key] = `${(number * 100).toFixed(2)}%`;
        } else if (accuracyFields.includes(key)) {
            formatted[key] = `${number.toFixed(2)}%`;
        } else if (wholeNumberFields.includes(key)) {
            formatted[key] = Math.round(number);
        } else if (fixed2dpFields.includes(key)) {
            formatted[key] = number.toFixed(2);
        } else {
            formatted[key] = value;
        }
    }

    return formatted;
};

const timedOpponentMetricOptions = [
    {
        key: 'accuracy',
        label: 'Average Accuracy',
        valueField: 'Avg Accuracy',
        yMax: 100,
        yTickFormatter: (value) => `${value}%`
    },
    {
        key: 'gameRating',
        label: 'Average Game Rating',
        valueField: 'Game Rating Avg',
        yMax: null,
        yTickFormatter: (value) => value.toLocaleString()
    },
    {
        key: 'errorSuppression',
        label: 'Error Suppression Score',
        valueField: 'Error Suppression Score',
        yMax: null,
        yTickFormatter: (value) => value.toFixed(1)
    },
    {
        key: 'moveQuality',
        label: 'Move Quality Ratio',
        valueField: 'Move Quality Ratio',
        yMax: null,
        yTickFormatter: (value) => value.toFixed(1)
    }
];

const TimedGameOpponentData = () => {
    const { data } = useFetchJsonData(
        "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Time%20Control%20Opponent%20Data"
    );

    const [selectedTimeControl, setSelectedTimeControl] = useState('3+2');
    const [selectedMetric, setSelectedMetric] = useState(
        timedOpponentMetricOptions[0]
    );

    const timeControlOptions = [
        ...new Set(
            (data ?? [])
                .map(row => row["Time Control"])
                .filter(value => value != null && value !== '')
        )
    ];

    const activeTimeControl =
        selectedTimeControl || timeControlOptions[0] || '';

    const filteredOpponentData = (data ?? []).filter(
        row => row["Time Control"] === activeTimeControl
    );

    return (
        <div className="box-style-standard standard-padding-margin">
            <h2>Time Control Opponent Data</h2>

            {data && (
                <BodyContainer hasBackground={true}>
                    <select
                        aria-label="Opponent chart time control"
                        value={activeTimeControl}
                        onChange={(e) => setSelectedTimeControl(e.target.value)}
                        className="standard-margin center-margin"
                    >
                        {timeControlOptions.map(timeControl => (
                            <option key={timeControl} value={timeControl}>
                                {timeControl}
                            </option>
                        ))}
                    </select>

                    <select
                        aria-label="Opponent chart metric"
                        value={selectedMetric.key}
                        onChange={(e) =>
                            setSelectedMetric(
                                timedOpponentMetricOptions.find(
                                    option => option.key === e.target.value
                                )
                            )
                        }
                        className="standard-margin center-margin"
                    >
                        {timedOpponentMetricOptions.map(option => (
                            <option key={option.key} value={option.key}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <p className="dropdown-replacement">
                        {selectedMetric.label} by Opponent — {activeTimeControl}
                    </p>

                    <div className="chesschart-scroll-x">
                        <FullWidthBarChart
                            title={selectedMetric.label}
                            rawData={filteredOpponentData}
                            labelField="Opponent"
                            valueField={selectedMetric.valueField}
                            color="rgba(54, 162, 235, 0.6)"
                            datalabels={false}
                            yMin={0}
                            yMax={selectedMetric.yMax}
                            yTickFormatter={selectedMetric.yTickFormatter}
                        />
                    </div>
                </BodyContainer>
            )}
            {data && (
                <ChessSectionTable
                    data={data.map(formatTimedGameOpponentData)}
                    rowsPerPage={15}
                    title="Time Control Opponent Data Table"
                />
            )}
        </div>
    );
};

export default TimedGameOpponentData;