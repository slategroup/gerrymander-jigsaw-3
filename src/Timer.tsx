import React from "react";
import { formatTime } from "./utils";

export const Timer: React.FunctionComponent<{ time: number }> = ({ time }) => {
  return <div className="timer">{formatTime(time)}</div>;
};