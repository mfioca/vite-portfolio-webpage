import React from 'react';
import useFetchJsonData from './useFetchJsonData';
import { BodyContainer, DividerLine } from '../SharedComponents';
import { PaginatedTable, LineChart, StackedPercentBarChart, GroupedBarChart } from './chess_components';


const formatMoveData = (row) => {
  const wholeNumberFields = [
    "Opponent rating",
    "Total Games",
    "Average Moves White Loss",
    "Average moves Win",
    "Average moves Loss",
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
    "Average Move quality Win",
    "Average Move Quality Loss",
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

const moveQualityStackOptions = [
  {
    key: 'all',
    label: 'All Move Quality',
    title: 'Move Quality Distribution by Opponent Rating',
    fields: [
      'brilliant',
      'great',
      'best',
      'excellent',
      'good',
      'book',
      'inaccuracy',
      'mistake',
      'miss',
      'blunder'
    ]
  },
  {
    key: 'aboveBook',
    label: 'Above Book Quality',
    title: 'Above-Book Move Quality Distribution by Opponent Rating',
    fields: [
      'good',
      'excellent',
      'best',
      'great',
      'brilliant'
    ]
  },
  {
    key: 'belowBook',
    label: 'Below Book Quality',
    title: 'Below-Book Move Quality Distribution by Opponent Rating',
    fields: [
      'inaccuracy',
      'mistake',
      'miss',
      'blunder'
    ]
  }
];

const ABOVE_BOOK_COLORS = {
  good: '#85c1e9',
  excellent: '#5dade2',
  best: '#3498db',
  great: '#27ae60',
  brilliant: '#6c3483'
};

const BELOW_BOOK_COLORS = {
  inaccuracy: '#f4d03f',
  mistake: '#e67e22',
  miss: '#e74c3c',
  blunder: '#c0392b'
};

/***********************************************************************************/
/*                          MoveDataSection Component                              */
/***********************************************************************************/

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

  const [selectedMoveQualityView, setSelectedMoveQualityView] = React.useState(
    moveQualityStackOptions[0]
  );

  return (
    <div className="box-style-standard standard-padding-margin">
      <h2>Move Data</h2>
      <div>
        {data && (
          <div className="chart2-wrap">
            <div className="chart2-box">
              <select
                value={ selectedMoveLengthField }
                onChange={ (e) => setSelectedMoveLengthField(e.target.value) }
                className="standard-margin"
              >
                {moveLengthByColorOptions.map(option => (
                  <option key={ option.key } value={ option.key }>
                    { option.label }
                  </option>
                ))}
              </select>
              <LineChart
                title="Average Game Length by Color and Opponent Rating"
                rawData={ data }
                xField="Opponent rating"
                yField={ selectedMoveLengthField }
              />
            </div>
            <div className="chart2-box">
              <div className="standard-margin" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Game Length Win vs Loss
              </div>
              <GroupedBarChart
                title="Average Moves by Outcome"
                rawData={data}
                labelField="Opponent rating"
                valueFields={[
                  "Average moves Win",
                  "Average moves Loss"
                ]}
              />
            </div>
            <div className="chart2-box">
              <select
                value={ selectedMoveField }
                onChange={ (e) => setSelectedMoveField(e.target.value) }
                className="standard-margin"
              >
                {moveLengthOptions.map(option => (
                  <option key={ option.key } value={ option.key }>
                    { option.label }
                  </option>
                ))}
              </select>
              <LineChart
                title="Average Move Types per Game by Opponent Rating"
                rawData={ data }
                xField="Opponent rating"
                yField={ selectedMoveField }
              />
            </div>
            <div className="chart2-box">
              <select
                value={ selectedMoveQualityView.key }
                onChange={(e) =>
                  setSelectedMoveQualityView(
                    moveQualityStackOptions.find(opt => opt.key === e.target.value)
                  )
                }
                className="standard-margin"
              >
                {moveQualityStackOptions.map(option => (
                  <option key={ option.key } value={ option.key }>
                    { option.label }
                  </option>
                ))}
              </select>
              <StackedPercentBarChart
                title={ selectedMoveQualityView.title }
                rawData={ data }
                labelField="Opponent rating"
                valueFields={ selectedMoveQualityView.fields }
                colorMap={
                  selectedMoveQualityView.key === 'aboveBook'
                    ? ABOVE_BOOK_COLORS
                    : selectedMoveQualityView.key === 'belowBook'
                    ? BELOW_BOOK_COLORS
                    : null
                }
              />
            </div>
            
            <div className="chart2-box">
              <div
                className="standard-margin"
                style={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Move Quality Win vs Loss
              </div>

              <GroupedBarChart
                title="Average Move Quality by Outcome"
                rawData={data}
                labelField="Opponent rating"
                valueFields={[
                  "Average Move quality Win",
                  "Average Move Quality Loss"
                ]}
                yMin={0}
                yMax={1}
                yTickFormatter={(v) => `${Math.round(v * 100)}%`}
              />
            </div>
          </div>
        )}
      </div>
      <DividerLine/>
      {data && (
        <PaginatedTable
          title="Move Data Table"
          data={ data.map(formatMoveData) }
          rowsPerPage={ 25 }
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
*/