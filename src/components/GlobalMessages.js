import React, { useContext } from 'react';
import { Alert } from 'antd';
import { PublicContext } from 'template';

export default function GlobalMessages() {
    const { globalMsg, delGlobalMsg } = useContext(PublicContext);
    return globalMsg.map((msg, index) => {
      return <Alert
        key={msg}
        message={msg}
        type="success"
        closable
        banner
        afterClose={() => delGlobalMsg(index)}
      />});
  }