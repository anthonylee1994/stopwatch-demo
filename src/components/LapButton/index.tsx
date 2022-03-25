import React from "react";
import "./index.css";

interface Props {
  onClick: () => void;
}

export const LapButton = React.memo<Props>(({ onClick }) => {
  return (
    <button className="lap-button" onClick={onClick}>
      Lap
    </button>
  );
});
