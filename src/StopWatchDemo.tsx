import React from "react";
import "./App.css";
import { ActionBar } from "./components/ActionBar";
import { BottomBar } from "./components/BottomBar";
import { LapButton } from "./components/LapButton";
import { LapsList } from "./components/LapsList";
import { Layout } from "./components/Layout";
import { StartButton } from "./components/StartButton";
import { StopButton } from "./components/StopButton";
import { StopWatchContainer } from "./components/StopWatchContainer";
import { Timer } from "./components/Timer";
import { TopBar } from "./components/TopBar";

export type TimerState = "stopped" | "running" | "paused";

export const StopWatchDemo = React.memo(() => {
  const [timerState, setTimerState] = React.useState<TimerState>("stopped");
  const [startTime, setStartTime] = React.useState<Date | null>(null);
  const [currentTime, setCurrentTime] = React.useState<Date>(new Date());

  const [pausedMilliseconds, setPausedMilliseconds] = React.useState<number>(0);
  const [previousPausedMilliseconds, setPreviousPausedMilliseconds] =
    React.useState<number>(0);

  const [windowTimer, setWindowTimer] = React.useState<number>(-1);
  const [laps, setLaps] = React.useState<number[]>([]);

  const calculateTimerMilliseconds = React.useCallback(
    (pausedMilliseconds: number = 0) => {
      const currentTimeMilliseconds = currentTime.getTime();
      const startTimeMilliseconds = startTime?.getTime() ?? 0;

      if (startTime === null) return 0;

      return (
        pausedMilliseconds + (currentTimeMilliseconds - startTimeMilliseconds)
      );
    },
    [currentTime, startTime]
  );

  const resumeTimer = React.useCallback(() => {
    setTimerState("paused");
    clearInterval(windowTimer);

    setPreviousPausedMilliseconds(pausedMilliseconds);
    setPausedMilliseconds(calculateTimerMilliseconds(pausedMilliseconds));
  }, [calculateTimerMilliseconds, pausedMilliseconds, windowTimer]);

  const pauseTimer = React.useCallback(() => {
    setTimerState("running");

    const now = new Date();
    setStartTime(now);
    setCurrentTime(now);

    setWindowTimer(
      window.setInterval(() => {
        setCurrentTime(new Date());
      }, 1)
    );
  }, []);

  const onStartButtonClick = React.useCallback(() => {
    if (timerState === "running") {
      resumeTimer();
    } else {
      pauseTimer();
    }
  }, [timerState, resumeTimer, pauseTimer]);

  const clearTimer = React.useCallback(() => {
    setTimerState("stopped");
    clearInterval(windowTimer);
    setStartTime(null);
    setCurrentTime(new Date());
    setPreviousPausedMilliseconds(0);
    setPausedMilliseconds(0);
    setLaps([]);
  }, [windowTimer]);

  const timerMillisecond = React.useMemo(
    () =>
      calculateTimerMilliseconds(
        timerState === "running"
          ? pausedMilliseconds
          : previousPausedMilliseconds
      ),
    [
      calculateTimerMilliseconds,
      pausedMilliseconds,
      previousPausedMilliseconds,
      timerState,
    ]
  );

  const onLapButtonClick = React.useCallback(() => {
    setLaps((laps) => [...laps, timerMillisecond]);
  }, [timerMillisecond]);

  return (
    <Layout>
      <StopWatchContainer>
        <TopBar />
        <Timer ms={timerMillisecond} />
        <ActionBar>
          <StartButton onClick={onStartButtonClick} timerState={timerState} />
          <LapButton onClick={onLapButtonClick} />
          <StopButton onClick={clearTimer} />
        </ActionBar>
        <LapsList laps={laps} />
        <BottomBar />
      </StopWatchContainer>
    </Layout>
  );
});
