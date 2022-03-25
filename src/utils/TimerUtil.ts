const formatTime = (ms: number): [string, string] => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor(ms % 1000);

  const padZero = (value: number, length = 2) => {
    return String(value).padStart(length, "0");
  };

  const displayTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;

  const displayMilliseconds = padZero(milliseconds, 3);

  return [displayTime, displayMilliseconds];
};

export const TimerUtil = Object.freeze({
  formatTime,
});
