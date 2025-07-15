def rot13(text):
    result = []
​
    for char in text:
        if 'a' <= char <= 'z':
            # Shift lowercase letters
            shifted = chr((ord(char) - ord('a') + 13) % 26 + ord('a'))
            result.append(shifted)
        elif 'A' <= char <= 'Z':
            # Shift uppercase letters
            shifted = chr((ord(char) - ord('A') + 13) % 26 + ord('A'))
            result.append(shifted)
        else:
            # Leave non-letters unchanged
            result.append(char)
​
    return ''.join(result)