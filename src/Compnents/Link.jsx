import  EventEmitter  from "../Utils/emmiter";
import React from "react";

const Link = () => {
  const handleClick = () => {
    EventEmitter.emit('NewLog', {
        text:"Hi From Tejasvi",
        create_at:new Date()
    })
  };

  return <div onClick={handleClick} style={{cursor:"pointer"}}>Click Me</div>;
};

export default Link;
