import { useState } from 'react';

export default () => {
  const defaultGlobalMgs = [];
  const [
    globalMsg,
    setGlobalMsg
  ] = useState(defaultGlobalMgs);

  const addGlobalMsg = (msg) => {
    setGlobalMsg([
      ...globalMsg,
      msg
    ]);
  };

  const delGlobalMsg = (posArray) => {
    const msgs = globalMsg.filter((item, index) => index !== posArray);
    setGlobalMsg(msgs);
  };

  return {
    globalMsg,
    addGlobalMsg,
    delGlobalMsg
  };
}