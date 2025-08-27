function rot13(str) {
  return str.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97; // ASCII for 'A' or 'a'
    return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
  });
}