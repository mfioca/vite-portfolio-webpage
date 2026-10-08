import { useState } from 'react';
import {
    ChessSectionTable,
    MultiLineChart,
    GroupedBarChart,
    StackedPercentBarChart
} from './chess_components.jsx';
import useFetchJsonData from './useFetchJsonData';


const formatTimedGameMoveData = (row) => {
    const wholeNumberFields = [
        "Opponent rating",
        "Total Games",
        "brilliant",
        "great",
        "best",
        "excellent",
        "good",
        "book",
        "inaccuracy",
        "mistake",
        "miss",
        "blunder",
    ];

    const fixed2dpFields = [
        "Average number of moves",
        "Average moves Win",
        "Average moves Loss",
        "Average moves White",
        "Average Moves White Win",
        "Average Moves White Loss",
        "Average Moves Black",
        "Average Moves Black Win",
        "Average Moves Black Loss",
        "Average Book Moves",
        "Average Good moves",
        "Average Bad Moves",
    ];

    const percent2dpFields = [
        "Average Move Quality",
        "Average Move quality Win",
        "Average Move Quality Loss",
        "Move Quality White",
        "Move Quality White Win",
        "Move Quality White Loss",
        "Move Quality Black",
        "Move Quality Black Win",
        "Move Quality Black Loss",
        "Average Move Quality Good",
        "Average Move Quality Bad",
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

        if (wholeNumberFields.includes(key)) {
            formatted[key] = Math.round(number);
        } else if (fixed2dpFields.includes(key)) {
            formatted[key] = number.toFixed(2);
        } else if (percent2dpFields.includes(key)) {
            formatted[key] = `${(number * 100).toFixed(2)}%`;
        } else {
            formatted[key] = value;
        }
    }

    return formatted;
};



const TimedGameMoveData = () => {
    const { data } = useFetchJsonData(
        "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Time%20Control%20Game%20Move%20Data"
    );

    const [selectedLengthTimeControl, setSelectedLengthTimeControl] = useState('');

    const [selectedOutcomeTimeControl, setSelectedOutcomeTimeControl] = useState('');

    const [selectedDistributionTimeControl, setSelectedDistributionTimeControl] = useState('');

    const [selectedQualityOutcomeTimeControl, setSelectedQualityOutcomeTimeControl] = useState('');

    const [selectedColorQualityTimeControl, setSelectedColorQualityTimeControl] = useState('');

    const [selectedMoveCountsTimeControl, setSelectedMoveCountsTimeControl] = useState('');

    const timeControlOptions = [
        ...new Set(
            (data ?? [])
                .map(row => row["Time Control"])
                .filter(value => value != null && value !== '')
        ),
    ];

    const activeLengthTimeControl =
        selectedLengthTimeControl || timeControlOptions[0] || '';

    const filteredLengthData = (data ?? []).filter(
        row => row["Time Control"] === activeLengthTimeControl
    );

    const activeOutcomeTimeControl =
        selectedOutcomeTimeControl || timeControlOptions[0] || '';

    const filteredOutcomeData = (data ?? [])
        .filter(row => row["Time Control"] === activeOutcomeTimeControl)
        .map(row => ({
            ...row,
            "Average moves Win":
                row["Average moves Win"] === "" ||
                    row["Average moves Win"] == null
                    ? undefined
                    : row["Average moves Win"],
            "Average moves Loss":
                row["Average moves Loss"] === "" ||
                    row["Average moves Loss"] == null
                    ? undefined
                    : row["Average moves Loss"],
        }));

    const activeDistributionTimeControl =
        selectedDistributionTimeControl || timeControlOptions[0] || '';

    const filteredDistributionData = (data ?? []).filter(
        row => row["Time Control"] === activeDistributionTimeControl
    );

    const activeQualityOutcomeTimeControl =
        selectedQualityOutcomeTimeControl || timeControlOptions[0] || '';

    const filteredQualityOutcomeData = (data ?? [])
        .filter(row => row["Time Control"] === activeQualityOutcomeTimeControl)
        .map(row => ({
            ...row,
            "Average Move quality Win":
                row["Average Move quality Win"] === "" ||
                    row["Average Move quality Win"] == null
                    ? undefined
                    : row["Average Move quality Win"],
            "Average Move Quality Loss":
                row["Average Move Quality Loss"] === "" ||
                    row["Average Move Quality Loss"] == null
                    ? undefined
                    : row["Average Move Quality Loss"],
        }));

    const activeColorQualityTimeControl =
        selectedColorQualityTimeControl || timeControlOptions[0] || '';

    const filteredColorQualityData = (data ?? [])
        .filter(row => row["Time Control"] === activeColorQualityTimeControl)
        .map(row => ({
            ...row,
            "Move Quality White":
                row["Move Quality White"] === "" ||
                    row["Move Quality White"] == null
                    ? null
                    : Number(row["Move Quality White"]) * 100,
            "Move Quality Black":
                row["Move Quality Black"] === "" ||
                    row["Move Quality Black"] == null
                    ? null
                    : Number(row["Move Quality Black"]) * 100,
        }));

    const activeMoveCountsTimeControl =
        selectedMoveCountsTimeControl || timeControlOptions[0] || '';

    const filteredMoveCountsData = (data ?? [])
        .filter(row => row["Time Control"] === activeMoveCountsTimeControl)
        .map(row => ({
            ...row,
            Book:
                row["Average Book Moves"] === "" ||
                    row["Average Book Moves"] == null
                    ? undefined
                    : Number(row["Average Book Moves"]),
            Good:
                row["Average Good moves"] === "" ||
                    row["Average Good moves"] == null
                    ? undefined
                    : Number(row["Average Good moves"]),
            Bad:
                row["Average Bad Moves"] === "" ||
                    row["Average Bad Moves"] == null
                    ? undefined
                    : Number(row["Average Bad Moves"]),
        }));

    return (
        <div className="box-style-standard standard-padding-margin">
            <h2>Time Control Game Move Data</h2>

            {data && (
                <div className="chesschart-wrap">
                    <div className="chesschart-box">
                        <select
                            aria-label="Average game length time control"
                            value={activeLengthTimeControl}
                            onChange={(e) => setSelectedLengthTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <MultiLineChart
                            title={`Average Game Length — ${activeLengthTimeControl}`}
                            rawData={filteredLengthData}
                            xField="Opponent rating"
                            metricLabel="Average Number of Moves"
                            yMin={0}
                            series={[
                                {
                                    field: "Average number of moves",
                                    label: "Overall"
                                },
                                {
                                    field: "Average moves White",
                                    label: "As White"
                                },
                                {
                                    field: "Average Moves Black",
                                    label: "As Black"
                                }
                            ]}
                        />
                    </div>
                    <div className="chesschart-box">
                        <select
                            aria-label="Game length by outcome time control"
                            value={activeOutcomeTimeControl}
                            onChange={(e) => setSelectedOutcomeTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <GroupedBarChart
                            title={`Average Moves by Outcome — ${activeOutcomeTimeControl}`}
                            rawData={filteredOutcomeData}
                            labelField="Opponent rating"
                            valueFields={[
                                "Average moves Win",
                                "Average moves Loss"
                            ]}
                            yMin={0}
                        />
                    </div>
                    <div className="chesschart-box">
                        <select
                            aria-label="Move quality distribution time control"
                            value={activeDistributionTimeControl}
                            onChange={(e) => setSelectedDistributionTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <StackedPercentBarChart
                            title={`Move Quality Distribution — ${activeDistributionTimeControl}`}
                            rawData={filteredDistributionData}
                            labelField="Opponent rating"
                            valueFields={[
                                "brilliant",
                                "great",
                                "best",
                                "excellent",
                                "good",
                                "book",
                                "inaccuracy",
                                "mistake",
                                "miss",
                                "blunder"
                            ]}
                        />
                    </div>
                    <div className="chesschart-box">
                        <select
                            aria-label="Move quality by outcome time control"
                            value={activeQualityOutcomeTimeControl}
                            onChange={(e) => setSelectedQualityOutcomeTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <GroupedBarChart
                            title={`Average Move Quality by Outcome — ${activeQualityOutcomeTimeControl}`}
                            rawData={filteredQualityOutcomeData}
                            labelField="Opponent rating"
                            valueFields={[
                                "Average Move quality Win",
                                "Average Move Quality Loss"
                            ]}
                            yMin={0}
                            yMax={1}
                            yTickFormatter={(value) => `${Math.round(value * 100)}%`}
                        />
                    </div>
                    <div className="chesschart-box">
                        <select
                            aria-label="Move quality by color time control"
                            value={activeColorQualityTimeControl}
                            onChange={(e) => setSelectedColorQualityTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <MultiLineChart
                            title={`Average Move Quality by Color — ${activeColorQualityTimeControl}`}
                            rawData={filteredColorQualityData}
                            xField="Opponent rating"
                            metricLabel="Average Move Quality (%)"
                            yMin={0}
                            yMax={100}
                            series={[
                                {
                                    field: "Move Quality White",
                                    label: "As White (%)"
                                },
                                {
                                    field: "Move Quality Black",
                                    label: "As Black (%)"
                                }
                            ]}
                        />
                    </div>
                    <div className="chesschart-box">
                        <select
                            aria-label="Average move counts time control"
                            value={activeMoveCountsTimeControl}
                            onChange={(e) => setSelectedMoveCountsTimeControl(e.target.value)}
                            className="standard-margin"
                        >
                            {timeControlOptions.map(timeControl => (
                                <option key={timeControl} value={timeControl}>
                                    {timeControl}
                                </option>
                            ))}
                        </select>

                        <GroupedBarChart
                            title={`Average Book, Good & Bad Moves per Game — ${activeMoveCountsTimeControl}`}
                            rawData={filteredMoveCountsData}
                            labelField="Opponent rating"
                            valueFields={["Book", "Good", "Bad"]}
                            colors={["#3498db", "#27ae60", "#e74c3c"]}
                            yMin={0}
                        />
                    </div>
                </div>
            )}


            {data && (
                <ChessSectionTable
                    data={data.map(formatTimedGameMoveData)}
                    rowsPerPage={15}
                    title="Time Control Game Move Data Table"
                />
            )}
        </div>
    );
};

export default TimedGameMoveData;