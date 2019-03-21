import React from 'react';
import useUniqueID from 'use/useUniqueID';

export default function UniqueID() {
  const { uniqueID, refreshUniqueID } = useUniqueID()

  return (<div className="alignCenter bigFont">
    <h1>
        {uniqueID}
    </h1>
    <button
      onClick={refreshUniqueID}
      className="bigFont"
    >
      Refresh
    </button>
  </div>);
}