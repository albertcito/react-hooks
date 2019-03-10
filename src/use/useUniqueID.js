import { useState } from 'react';

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (char) => {
    const shiftVal = (15 >> (char/4));
    const randValue = crypto.getRandomValues(new Uint8Array(1))[0];
    const param = randValue & shiftVal;
    return (char ^ param).toString(16);
  });
}

export default () => {
  const [uniqueID, setUniqueID] = useState(uuidv4());
  const refreshUniqueID = () => setUniqueID(uuidv4());
  return {
    uniqueID,
    refreshUniqueID
  };

};