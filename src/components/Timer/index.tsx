import React from "react";
import { TimerUtil } from "../../utils/TimerUtil";
import "./index.css";

interface Props {
  ms: number;
}

export const Timer = React.memo<Props>(({ ms }) => {
  const [displayTime, milliseconds] = TimerUtil.formatTime(ms);

  return (
    <div className="timer">
      <div className="time-display">
        {displayTime}
        <div className="time-ms-display">{milliseconds}</div>
      </div>
    </div>
  );
});
