function isValidIP(str) {
  const segments = str.split('.');
  if (segments.length !== 4) return false;
  return segments.every(seg => {
    // Check if it's numeric, no leading zeros, within range
    return /^[0-9]+$/.test(seg) && 
           !(seg.length > 1 && seg.startsWith('0')) &&
           +seg >= 0 && +seg <= 255;
  });
}