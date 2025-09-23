import re
from collections import Counter
​
def top_3_words(text):
    words = re.findall(r"[a-z']+", text.lower())
    words = [w for w in words if w.strip("'")]
    return [w for w, _ in Counter(words).most_common(3)]