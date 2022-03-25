import React from "react";
import "./index.css";

export const Layout = React.memo(({ children }) => {
  return <div className="layout">{children}</div>;
});
