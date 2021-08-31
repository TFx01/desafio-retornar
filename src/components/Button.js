import React, { memo } from "react";

function Button({ handleValue, value, text }) {
  return <button onClick={(e) => handleValue(value, e.target)}>{value}</button>;
}

export default memo(Button);
