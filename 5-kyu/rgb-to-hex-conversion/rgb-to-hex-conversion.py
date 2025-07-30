def rgb(r, g, b):
    def clamp(val):
        return max(0, min(255, val))  # Clamp between 0 and 255
​
    return ''.join(f"{clamp(val):02X}" for val in (r, g, b))