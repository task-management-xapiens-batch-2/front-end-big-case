import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const DatePickerComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker isClockOpen="false" onChange={onChange} value={value} />
    </div>
  );
};

export default DatePickerComponent;
