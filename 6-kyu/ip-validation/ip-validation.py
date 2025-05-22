def is_valid_IP(ip):
    parts = ip.split('.')
    if len(parts) != 4:
        return False
    for part in parts:
        if not part.isdigit():
            return False
        if len(part) > 1 and part[0] == '0':
            return False
        num = int(part)
        if num < 0 or num > 255:
            return False
    return True