import React from 'react';
import useUniqueID from 'use/useUniqueID';

export default function UniqueID() {
  const { uniqueID, refreshUniqueID } = useUniqueID()
  return (<div>
    <h1>{uniqueID}</h1>
    <button onClick={refreshUniqueID}>
      Reset
    </button>
  </div>);
}