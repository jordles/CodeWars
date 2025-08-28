def rot13(text: str) -> str:
    def shift(ch: str) -> str:
        code = ord(ch)
        if 'a' <= ch <= 'z':
            return chr(code + 13 if ch <= 'm' else code - 13)
        elif 'A' <= ch <= 'Z':
            return chr(code + 13 if ch <= 'M' else code - 13)
        return ch  # keep non-letters unchanged
​
    return ''.join(shift(c) for c in text)