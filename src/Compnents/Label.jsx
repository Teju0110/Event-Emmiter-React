import  EventEmitter  from "../Utils/emmiter";
import React, { useEffect, useState } from "react";

const Label = () => {
  const [logs, setLogs] = useState([]);
  console.log("logs", logs)

  useEffect(()=>{
    const onNewLog =(eventData)=>{
        setLogs(prevValue=>([
            ...prevValue,
            eventData
        ]))
    }

    const listener = EventEmitter.addListener('NewLog', onNewLog)

    return ()=>{
        listener.remove();
    }
  },[])
  return (
    <div>
      {logs.map((log) => (
        <div key={log.create_at}>{log.text}</div>
      ))}
    </div>
  );
};

export default Label;
