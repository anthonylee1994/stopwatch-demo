import React from "react";
import { TimerUtil } from "../../utils/TimerUtil";
import "./index.css";

interface Props {
  laps: number[];
}

export const LapsList = React.memo<Props>(({ laps }) => {
  const ref: React.LegacyRef<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [laps]);

  return (
    <div ref={ref} className="laps-list">
      {laps.map((lap, index) => {
        const [displayTime, millisecond] = TimerUtil.formatTime(lap);

        return (
          <div key={index}>
            <span>Split {index + 1} </span>
            <span>{displayTime}</span>
            <span>({millisecond})</span>
          </div>
        );
      })}
    </div>
  );
});
