import React from "react";
import "./index.css";

interface Props {
  onClick: () => void;
}

export const StopButton = React.memo<Props>(({ onClick }) => {
  return (
    <button className="stop-button" onClick={onClick}>
      Clear
    </button>
  );
});
