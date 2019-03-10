import React, { useState } from 'react';

export default function Basic() {

  const [count, setCount] = useState(0);

  return (<div className="alignCenter bigFont">
    <h1>
      total: {count}
    </h1>
    <button
      onClick={() => setCount(count + 1)}
      className="bigFont"
    >
      Add
    </button>
  </div>);
}