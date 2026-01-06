import React, { useState } from 'react';
import './Chess.css';


export const PaginatedTable = ({ data, rowsPerPage = 25, title }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const keys = Object.keys(data[0]);

  return (
    <>
      <h2>{ title }</h2>
      <div className="game-archive-table-container">
        <table className="game-archive-table">
          <thead>
            <tr>
              {keys.map((key) => (
                <th key={ key }>{ key }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={ rowIndex }>
                {keys.map((key, colIndex) => (
                  <td key={ colIndex }>{ row[key] }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          className="button"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={ currentPage === 1 }
        >
          Previous
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page { currentPage } of { totalPages }
        </span>
        <button
          className="button"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={ currentPage === totalPages }
        >
          Next
        </button>
      </div>
    </>
  );
};
