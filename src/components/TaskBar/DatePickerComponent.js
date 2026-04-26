import React from "react";

const DatePickerComponent = () => {
  const today = new Date();

  return (
    <div style={{ color: "white", fontSize: "14px" }}>
      {today.toLocaleDateString()} {today.toLocaleTimeString()}
    </div>
  );
};

export default DatePickerComponent;