import Signal from "./Signal.js";
import "../../src/styles.css";
import React from "react";

const TrafficLights = () => {
  const signals = ["red", "yellow", "green"];
  const [activeLight, setActiveLight] = React.useState("red");

  React.useEffect(() => {
    handleSignalLights();
  }, []);

  handleSignalLights = () => {
    const timeInterval = setInterval(() => {
      setActiveLight((prevLight) => {
        switch (prevLight) {
          case "red":
            return "yellow";
          case "yellow":
            return "green";
          case "green":
            return "red";
          default:
            return "red";
        }
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  };

  return (
    <div className="TrafficSignals">
      {signals.map((color, index) => (
        <Signal key={index} color={color} isActive={color === activeLight} />
      ))}
    </div>
  );
};

export default TrafficLights;
