import React from "react";
import { UseNumberSetValue, UseNumberValue } from "../types/useNumber";

const Incrementor: React.FC<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => {
  return <button onClick={() => setValue(value + 1)}>Add - {value}</button>;
};

export default Incrementor;
