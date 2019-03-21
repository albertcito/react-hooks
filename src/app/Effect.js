import React, { useState, useEffect } from 'react';
import useUniqueID from 'use/useUniqueID';

export default function Basic() {
  const { uniqueID, refreshUniqueID } = useUniqueID()
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = name;
  }, [name]);

  return (<div className="alignCenter bigFont">
    <h1>
      My name in the window title
    </h1>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <h3>{uniqueID}</h3>
    <button onClick={refreshUniqueID}>UID</button>

    <h3>total: {count}</h3>
    <button onClick={() => setCount(count + 1)}>Count</button>
  </div>);
}