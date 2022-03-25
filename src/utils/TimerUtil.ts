const formatTime = (ms: number): [string, string] => {
  const hour = Math.floor(ms / 3600000);
  const minute = Math.floor((ms % 3600000) / 60000);
  const second = Math.floor((ms % 60000) / 1000);
  const millisecond = Math.floor(ms % 1000);

  const padZero = (value: number, length = 2) => {
    return String(value).padStart(length, "0");
  };

  const displayTime = `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;

  const displayMillisecond = padZero(millisecond, 3);

  return [displayTime, displayMillisecond];
};

export const TimerUtil = Object.freeze({
  formatTime,
});
