import React from "react";
import { TimerState } from "../../App";
import "./index.css";

interface Props {
  timerState: TimerState;
  onClick: () => void;
}

export const StartButton = React.memo<Props>(({ timerState, onClick }) => {
  const buttonType = React.useMemo(() => {
    switch (timerState) {
      case "stopped":
        return "start";
      case "running":
        return "pause";
      case "paused":
        return "continue";
    }
  }, [timerState]);

  return (
    <button className={`${buttonType}-button`} onClick={onClick}>
      {buttonType}
    </button>
  );
});
