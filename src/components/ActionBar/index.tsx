import React from "react";
import "./index.css";

export const ActionBar = React.memo(({ children }) => {
  return <div className="action-bar">{children}</div>;
});
