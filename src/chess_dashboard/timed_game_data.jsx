import { useState } from 'react';
import useFetchJsonData from './useFetchJsonData';
import { ChessSectionTable, LineChart, CandleChart, MultiLineChart } from './chess_components.jsx';

const formatTimedGameData = (row) => {
    const percentFields = [
        "Accuracy avg",
        "Accuracy high",
        "Accuracy low",
        "Accuracy White",
        "Accuracy Black",
    ];

    const wholeNumberFields = [
        "Game rating avg",
        "Game rating high",
        "Game rating low",
        "Game rating White",
        "Game rating Black",
    ];

    const decimalFields = [
        "Recorded total time avg (s)",
        "Avg Time per Move (s)",
        "Avg Longest Move (s)",
        "Longest Move (s)",
    ];

    const formatted = {};

    for (const key in row) {
        const value = row[key];

        if (value === "" || value == null) {
            formatted[key] = null;
            continue;
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            formatted[key] = value;
            continue;
        }

        if (percentFields.includes(key)) {
            formatted[key] = `${number.toFixed(1)}%`;
        } else if (wholeNumberFields.includes(key)) {
            formatted[key] = Math.round(number);
        } else if (decimalFields.includes(key)) {
            formatted[key] = number.toFixed(2);
        } else {
            formatted[key] = value;
        }
    }

    return formatted;
};

const TimedGameData = () => {
    const { data } = useFetchJsonData(
        "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Time%20Control%20Game%20Data"
    );

    const [selectedTimeControl, setSelectedTimeControl] = useState('');

    const [selectedRangeTimeControl, setSelectedRangeTimeControl] = useState('');

    const [selectedRatingTimeControl, setSelectedRatingTimeControl] = useState('');

    const [selectedTotalTimeControl, setSelectedTotalTimeControl] = useState('');

    const [selectedMoveTimeControl, setSelectedMoveTimeControl] = useState('');

    const timeControlOptions = [
        ...new Set(
            (data ?? [])
                .map(row => row["Time Control"])
                .filter(value => value != null && value !== '')
        ),
    ];

    const activeTimeControl =
        selectedTimeControl || timeControlOptions[0] || '';

    const filteredTimeData = (data ?? []).filter(
        row => row["Time Control"] === activeTimeControl
    );

    const activeRangeTimeControl =
        selectedRangeTimeControl || timeControlOptions[0] || '';

    const filteredRangeTimeData = (data ?? []).filter(
        row => row["Time Control"] === activeRangeTimeControl
    );

    const activeRatingTimeControl =
        selectedRatingTimeControl || timeControlOptions[0] || '';

    const filteredRatingTimeData = (data ?? []).filter(
        row => row["Time Control"] === activeRatingTimeControl
    );

    const activeTotalTimeControl =
        selectedTotalTimeControl || timeControlOptions[0] || '';

    const filteredTotalTimeData = (data ?? []).filter(
        row => row["Time Control"] === activeTotalTimeControl
    );

    const activeMoveTimeControl =
        selectedMoveTimeControl || timeControlOptions[0] || '';

    const filteredMoveTimeData = (data ?? []).filter(
        row => row["Time Control"] === activeMoveTimeControl
    );

    return (
        <div className="box-style-standard standard-padding-margin">
            <h2>Time Control Game Data</h2>
            {data && (
                <div className="chesschart-wrap">
                    <div className="chesschart-box">
                        <select
                            aria-label="Average accuracy time control"
                            value={ activeTimeControl }
                            onChange={(e) => setSelectedTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={ timeControl } value={ timeControl }>
                                    { timeControl }
                                </option>
                            ))}
                        </select>

                        <LineChart
                            title={ `Average Accuracy — ${activeTimeControl}` }
                            rawData={ filteredTimeData }
                            metricLabel="Average Accuracy (%)"
                            xField="Opponent rating"
                            yField="Accuracy avg"
                            yMin={ 0 }
                            yMax={ 100 }
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Accuracy range time control"
                            value={ activeRangeTimeControl }
                            onChange={(e) => setSelectedRangeTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={ timeControl } value={ timeControl }>
                                    { timeControl }
                                </option>
                            ))}
                        </select>

                        <CandleChart
                            title={ `Accuracy Range — ${activeRangeTimeControl}` }
                            rawData={ filteredRangeTimeData }
                            metricLabel="Accuracy (%)"
                            labelField="Opponent rating"
                            highField="Accuracy high"
                            lowField="Accuracy low"
                            yMin={ 0 }
                            yMax={ 100 }
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Average game rating time control"
                            value={ activeRatingTimeControl }
                            onChange={(e) => setSelectedRatingTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={ timeControl } value={ timeControl }>
                                    { timeControl }
                                </option>
                            ))}
                        </select>

                        <LineChart
                            title={ `Average Game Rating — ${activeRatingTimeControl}` }
                            rawData={ filteredRatingTimeData }
                            metricLabel="Average Game Rating"
                            xField="Opponent rating"
                            yField="Game rating avg"
                            yMin={ 0 }
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Average total game time control"
                            value={ activeTotalTimeControl }
                            onChange={(e) => setSelectedTotalTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={ timeControl } value={ timeControl }>
                                    { timeControl }
                                </option>
                            ))}
                        </select>

                        <LineChart
                            title={ `Average Recorded Game Time — ${activeTotalTimeControl}` }
                            rawData={ filteredTotalTimeData }
                            metricLabel="Recorded Time per Game (s)"
                            xField="Opponent rating"
                            yField="Recorded total time avg (s)"
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Move timing time control"
                            value={activeMoveTimeControl}
                            onChange={(e) => setSelectedMoveTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={ timeControl } value={ timeControl }>
                                    { timeControl }
                                </option>
                            ))}
                        </select>

                        <MultiLineChart
                            title={ `Recorded Move Timing — ${activeMoveTimeControl}` }
                            rawData={ filteredMoveTimeData }
                            xField="Opponent rating"
                            metricLabel="Seconds"
                            series={[
                                {
                                    field: "Avg Time per Move (s)",
                                    label: "Avg Time per Move (s)"
                                },
                                {
                                    field: "Avg Longest Move (s)",
                                    label: "Avg Longest Move (s)"
                                },
                                {
                                    field: "Longest Move (s)",
                                    label: "Longest Move (s)",
                                    borderDash: [6, 4]
                                }
                            ]}
                        />
                    </div>
                </div>
            )}
            {data && (
                <ChessSectionTable
                    data={data.map(formatTimedGameData)}
                    rowsPerPage={ 15 }
                    title="Time Control Game Data Table"
                />
            )}
        </div>
    );
};

export default TimedGameData;