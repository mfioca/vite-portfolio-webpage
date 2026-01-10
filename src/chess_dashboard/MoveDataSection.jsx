import React from 'react';
import useFetchJsonData from './useFetchJsonData';
import { PaginatedTable, LineChart, StackedPercentBarChart } from './chess_components';


const formatMoveData = (row) => {
  const wholeNumberFields = [
    "Opponent rating",
    "Total Games",
    "Average Moves White Loss",
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
  ];

  const fixed2dpFields = [
    "Average number of moves",
    "Average moves White",
    "Average Moves White Win",
    "Average Moves Black",
    "Average Moves Black Win",
    "Average Book Moves",
    "Average Good moves",
    "Average Bad Moves"
  ];

  const percent2dpFields = [
    "Average Move qality",
    "Move Quality White",
    "Move Quality White Win",
    "Move Quality White Loss",
    "Move Quality Black",
    "Average Move Quality Good",
    "Average Move Quality Bad",
    "Move Quality White Loss",
    "Move Quality Black Loss"
  ];

  const formatted = {};

  for (const key in row) {
    const value = row[key];

    if (value === "") {
      formatted[key] = null;
      continue;
    }

    if (wholeNumberFields.includes(key)) {
      formatted[key] = Number.isFinite(+value)
        ? Math.round(Number(value))
        : value;
      continue;
    }

    if (fixed2dpFields.includes(key)) {
      formatted[key] = Number.isFinite(+value)
        ? Number(value).toFixed(2)
        : value;
      continue;
    }

    if (percent2dpFields.includes(key)) {
      formatted[key] = Number.isFinite(+value)
        ? `${(Number(value) * 100).toFixed(2)}%`
        : value;
      continue;
    }

    formatted[key] = value;
  }

  return formatted;
};

const moveLengthOptions = [
  { key: "Average Book Moves", label: "Average Book Moves" },
  { key: "Average Good moves", label: "Average Good Moves" },
  { key: "Average Bad Moves", label: "Average Bad Moves" }
];

const moveLengthByColorOptions = [
  { key: "Average number of moves", label: "Average Total Moves" },
  { key: "Average moves White", label: "Average Moves (White)" },
  { key: "Average Moves Black", label: "Average Moves (Black)" }
];


const MoveDataSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Move%20Data"
  );

  const [selectedMoveField, setSelectedMoveField] = React.useState(
    moveLengthOptions[0].key
  );

  const [selectedMoveLengthField, setSelectedMoveLengthField] = React.useState(
    moveLengthByColorOptions[0].key
  );

  return (
    <div className="box-style-standard standard-padding-margin">
      <h2>Move Data</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {data && (
          <div className="flex-wrap-center gap-20">

            <div className="flex-column-center">

              <select
                value={selectedMoveLengthField}
                onChange={(e) => setSelectedMoveLengthField(e.target.value)}
                className="standard-margin"
              >
                {moveLengthByColorOptions.map(option => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>

              <LineChart
                title="Average Game Length by Color and Opponent Rating"
                rawData={data}
                xField="Opponent rating"
                yField={selectedMoveLengthField}
              />

            </div>
            

    
            <div className="flex-column-center">

              <select
                value={selectedMoveField}
                onChange={(e) => setSelectedMoveField(e.target.value)}
                className="standard-margin"
              >
                {moveLengthOptions.map(option => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>

              <LineChart
                title="Average Move Types per Game by Opponent Rating"
                rawData={data}
                xField="Opponent rating"
                yField={selectedMoveField}
              />

            </div>
            <StackedPercentBarChart
              title="Move Quality Distribution by Opponent Rating"
              rawData={data}
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
        )}
      </div>
      {data && (
        <PaginatedTable
          title="Move Data Table"
          data={data.map(formatMoveData)}
          rowsPerPage={25}
        />
      )}
    </div>
  );
};

export default MoveDataSection;


/*
<div className="flex-wrap-center gap-20">
            <LineChart
              title="Average Game Length by Opponent Rating"
              rawData={data}
              xField="Opponent rating"
              yField="Average number of moves"
            />
*/