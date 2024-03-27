import React, { useState, useEffect } from 'react';
import { List } from "./list";

export function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.npoint.io/86690d80ff3d455133f0');
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      <List data={data} />
    </div>
  );
}