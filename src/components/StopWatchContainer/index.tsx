import React from "react";
import "./index.css";

export const StopWatchContainer = React.memo(({ children }) => {
  return <div className="stop-watch-container">{children}</div>;
});
