import React from 'react';
import '../styles/Time.css';

export const Time = ({ hours, minutes, seconds, milliseconds }) => {
  return (
    <div className="time">
      <div className="hrs">{hours}</div>:<div className="mins">{minutes}</div>:
      <div className="secs">{seconds}</div>:
      <div className="msecs">{milliseconds}</div>
    </div>
  );
};
