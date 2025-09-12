def parse_int(s):
    words = {
        **{w: i for i, w in enumerate("zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split())},
        **dict(zip("twenty thirty forty fifty sixty seventy eighty ninety".split(), range(20, 100, 10))),
        "hundred": 100, "thousand": 1000, "million": 10**6
    }
    s = s.replace(" and", "").replace("-", " ")
    total = num = 0
    for w in s.split():
        val = words[w]
        if val == 100:
            num = max(1, num) * val
        elif val >= 1000:
            total += num * val
            num = 0
        else:
            num += val
    return total + num
​