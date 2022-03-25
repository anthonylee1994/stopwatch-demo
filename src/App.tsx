import React from "react";
import "./App.css";
import { StopWatchDemo } from "./StopWatchDemo";

export type TimerState = "stopped" | "running" | "paused";

const App = React.memo(() => {
  return <StopWatchDemo />;
});

export default App;
