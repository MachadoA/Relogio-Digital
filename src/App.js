import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const intervalID = setInterval(() => updateTime(), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [updateTime]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const updateTime = () => {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div className="container">
      <div className="clock">
        <span className="hours">{hours}</span>
        <span className="divider">:</span>
        <span className="minutes">{minutes}</span>
        <span className="divider">:</span>
        <span className="seconds">{seconds}</span>
      </div>
    </div>
  );
}

export default App;
