import React from 'react';
import useFetchJsonData from './useFetchJsonData';
import { useState } from 'react';



const GameArchiveSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Game%20Archive"
  );

  const rowsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = data ? Math.ceil(data.length / rowsPerPage) : 0;
  const paginatedData = data?.slice(
    (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
  );

  return (
    <div className="box-style-standard standard-padding-margin">
      <h2>Game Archive</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {/*{data && (
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
      )}*/}
      {data && Array.isArray(data) && (
        <>
        <div className="game-archive-table-container">
          <table className="game-archive-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.keys(row).map((key, colIndex) => (
                    <td key={colIndex}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="pagination">
            <button className="button"
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span style={{ margin: '0 1rem' }}>
              Page {currentPage} of {totalPages}
            </span>
            <button className="button"
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameArchiveSection;