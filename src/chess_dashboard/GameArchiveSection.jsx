import React from 'react';
import useFetchJsonData from './useFetchJsonData';
import { BodyContainer } from '../SharedComponents';
import { PaginatedTable } from './chess_components.jsx';



const GameArchiveSection = () => {
  const { data, loading, error } = useFetchJsonData(
    "https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec?sheet=Game%20Archive"
  );

  return (
    <BodyContainer>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: { error }</p>}
      <PaginatedTable
        data={ data }
        rowsPerPage={ 20 }
        title="Game Archive"
      />
    </BodyContainer>
  );
};

export default GameArchiveSection;