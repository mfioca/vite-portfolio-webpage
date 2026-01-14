import { useState, useEffect } from 'react';

const useFetchJsonData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchJsonData;



/*
{data && (
  <pre
    style={{
      maxHeight: '600px',
      overflow: 'auto',
      background: '#f9f9f9',
      padding: '10px',
      fontSize: '0.8rem',
      textAlign: 'left'
    }}
  >
    {JSON.stringify(data, null, 2)}
  </pre>
)}
*/