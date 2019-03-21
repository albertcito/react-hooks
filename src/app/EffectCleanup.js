import React, { useState, useEffect } from 'react';

export default function Basic() {
  const [period, setPeriod] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPeriod(period + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    console.log(period);
  }, [period]);

  return (<div className="alignCenter bigFont">
    <h1>
      setInterval: {period}
    </h1>
  </div>);
}