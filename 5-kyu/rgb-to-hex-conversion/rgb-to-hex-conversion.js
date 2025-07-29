function rgb(r, g, b) {
  return [r, g, b].reduce((hex, val) => {
    const clamped = Math.max(0, Math.min(255, val)); // Clamp between 0 and 255
    const hexPart = clamped.toString(16).toUpperCase().padStart(2, '0'); // Convert to hex and pad if needed
    return hex + hexPart; // Accumulate the hex string
  }, '');
}