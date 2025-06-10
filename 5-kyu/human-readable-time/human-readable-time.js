function humanReadable(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}
​
//const humanReadable = s => [s / 3600, s / 60 % 60, s % 60].map(t => String(Math.floor(t)).padStart(2, '0')).join(':');
​