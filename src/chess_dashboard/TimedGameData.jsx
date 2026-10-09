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

    const { data: recentPerformanceData } = useFetchJsonData(
        "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Time%20Control%20Recent%20Performance"
    );

    const [selectedTimeControl, setSelectedTimeControl] = useState('');

    const [selectedRangeTimeControl, setSelectedRangeTimeControl] = useState('');

    const [selectedRatingTimeControl, setSelectedRatingTimeControl] = useState('');

    const [selectedTotalTimeControl, setSelectedTotalTimeControl] = useState('');

    const [selectedMoveTimeControl, setSelectedMoveTimeControl] = useState('');

    const [selectedSummaryTimeControl, setSelectedSummaryTimeControl] = useState('3+2');

    const summaryTimeControlOptions = [
        ...new Set(
            (recentPerformanceData ?? [])
                .map(row => row.time_control)
                .filter(value => value != null && value !== '')
        )
    ];

    const activeSummaryTimeControl =
        summaryTimeControlOptions.includes(selectedSummaryTimeControl)
            ? selectedSummaryTimeControl
            : summaryTimeControlOptions[0] || '';

    const performanceSummaries = ['recent', 'lifetime']
        .map(period =>
            (recentPerformanceData ?? []).find(
                row =>
                    row.time_control === activeSummaryTimeControl &&
                    row.period === period
            )
        )
        .filter(Boolean);

    const formatSummaryValue = (value, decimals = 0, suffix = '') => {
        if (value === '' || value == null || !Number.isFinite(Number(value))) {
            return '—';
        }

        return `${Number(value).toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        })}${suffix}`;
    };

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
            {performanceSummaries.length > 0 && (
                <>
                    <label className="game-data-summary-label performance-summary-label">
                        Time Control
                        <select
                            value={activeSummaryTimeControl}
                            onChange={(e) => setSelectedSummaryTimeControl(e.target.value)}
                            className="performance-summary-select"
                        >
                            {summaryTimeControlOptions.map(timeControl => {
                                const [minutes, increment] = timeControl.split('+');

                                return (
                                    <option key={timeControl} value={timeControl}>
                                        {minutes} min + {increment} sec/move
                                    </option>
                                );
                            })}
                        </select>
                    </label>

                    <div className="chesschart-wrap">
                        {performanceSummaries.map(summary => (
                            <div className="chesschart-box" key={summary.period}>
                                <h3 className="game-data-summary-label">
                                    {summary.period === 'recent'
                                        ? `Recent ${formatSummaryValue(summary.window_games)} Games`
                                        : 'Lifetime'}
                                    {' — '}{activeSummaryTimeControl}
                                </h3>

                                <div className="game-data-summary">
                                    <div className="game-data-summary-item">
                                        <span className="game-data-summary-label">
                                            Average Accuracy
                                        </span>
                                        <span className="game-data-summary-value">
                                            {formatSummaryValue(summary.accuracy_mean, 2, '%')}
                                        </span>
                                        <small>
                                            {formatSummaryValue(summary.accuracy_count)} games
                                        </small>
                                    </div>

                                    <div className="game-data-summary-item">
                                        <span className="game-data-summary-label">
                                            Average Game Rating
                                        </span>
                                        <span className="game-data-summary-value">
                                            {formatSummaryValue(summary.game_rating_mean)}
                                        </span>
                                        <small>
                                            {formatSummaryValue(summary.game_rating_count)} games
                                        </small>
                                    </div>
                                </div>

                                <p className="game-data-annotation">
                                    {formatSummaryValue(summary.games_in_window)} games in this period.
                                    {' '}Game rating includes opponents rated{' '}
                                    {formatSummaryValue(summary.opponent_rating_min)} or higher.
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {data && (
                <div className="chesschart-wrap">
                    <div className="chesschart-box">
                        <select
                            aria-label="Average accuracy time control"
                            value={activeTimeControl}
                            onChange={(e) => setSelectedTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <LineChart
                            title={`Average Accuracy — ${activeTimeControl}`}
                            rawData={filteredTimeData}
                            metricLabel="Average Accuracy (%)"
                            xField="Opponent rating"
                            yField="Accuracy avg"
                            yMin={0}
                            yMax={100}
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Accuracy range time control"
                            value={activeRangeTimeControl}
                            onChange={(e) => setSelectedRangeTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <CandleChart
                            title={`Accuracy Range — ${activeRangeTimeControl}`}
                            rawData={filteredRangeTimeData}
                            metricLabel="Accuracy (%)"
                            labelField="Opponent rating"
                            highField="Accuracy high"
                            lowField="Accuracy low"
                            yMin={0}
                            yMax={100}
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Average game rating time control"
                            value={activeRatingTimeControl}
                            onChange={(e) => setSelectedRatingTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <LineChart
                            title={`Average Game Rating — ${activeRatingTimeControl}`}
                            rawData={filteredRatingTimeData}
                            metricLabel="Average Game Rating"
                            xField="Opponent rating"
                            yField="Game rating avg"
                            yMin={0}
                        />
                    </div>

                    <div className="chesschart-box">
                        <select
                            aria-label="Average total game time control"
                            value={activeTotalTimeControl}
                            onChange={(e) => setSelectedTotalTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <LineChart
                            title={`Average Recorded Game Time — ${activeTotalTimeControl}`}
                            rawData={filteredTotalTimeData}
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
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <MultiLineChart
                            title={`Recorded Move Timing — ${activeMoveTimeControl}`}
                            rawData={filteredMoveTimeData}
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
                    rowsPerPage={15}
                    title="Time Control Game Data Table"
                />
            )}
        </div>
    );
};

export default TimedGameData;