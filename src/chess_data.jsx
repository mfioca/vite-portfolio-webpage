import React, { useEffect, useState } from 'react';

const PlaceholderPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzl5xXecAfMN-31CL25nj-pzl9JBuTvnAwEXffO3lZOLKazeCD7Iw9nMYkusj9NHXl-bw/exec")
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
  }, []);

  return (
    <div className="center-margin base-max-width">
      <div className="box-style-standard standard-padding-margin">
        <h2>Live JSON Data Test</h2>

        {loading && <p>Loading data...</p>}
        {error && <p>Error: {error}</p>}

        {data && (
          <pre style={{ 
            textAlign: "left",
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderRadius: "6px",
            maxHeight: "400px",
            overflow: "auto"
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default PlaceholderPage;