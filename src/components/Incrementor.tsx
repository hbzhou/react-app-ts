import React from "react";
import Button from "./Button";
import { UseNumberSetValue, UseNumberValue } from "../types/useNumber";

const Incrementor: React.FC<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => {
  return <Button onClick={() => setValue(value + 1)} title={`Add - ${value}`} />;
};

export default Incrementor;
