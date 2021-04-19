import React from "react";

const Light = ({ color, active }) => (
  <div
    className="signal"
    style={{ backgroundColor: color, opacity: active ? 1 : 0.3 }}
  />
);

export default Light;