import React, { useState, useEffect } from "react";
import Light from "./Light";

const lightDurations = [3000, 2000, 1000];

const TrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="traffic-light">
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;
