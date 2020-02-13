def levenshteinDistance(str1, str2):
    s1 = "__" + str1
    s2 = "__" + str2

    tracker = []
    # add str 1 into table
    tracker.append(list(s1))

    # add str2 into table
    for idx in range(len(s2)):
        if idx != 0:
            sub = [0] * len(s1)
            sub[0] = s2[idx]
            tracker.append(sub)

    for idx1 in range(1, len(s2)):
        for idx2 in range(1, len(s1)):
            if idx1 == 1 and idx2 == 1:
                tracker[idx1][idx2] = 0
            elif idx1 == 1:
                left = tracker[idx1][idx2 - 1]
                if tracker[0][idx2] == tracker[idx1][0]: 
                    tracker[idx1][idx2] = left
                else:
                    tracker[idx1][idx2] = left + 1
            elif idx2 == 1:
                up = tracker[idx1 - 1][idx2]
                if tracker[0][idx2] == tracker[idx1][0]: 
                    tracker[idx1][idx2] = up
                else:
                    tracker[idx1][idx2] = up + 1
            else:
                left = tracker[idx1][idx2 - 1]
                up = tracker[idx1 - 1][idx2]
                diag = tracker[idx1 - 1][idx2 - 1]
                mini = min(left, up, diag)
                if tracker[0][idx2] == tracker[idx1][0]: 
                    tracker[idx1][idx2] = mini
                else:
                    tracker[idx1][idx2] = mini + 1
    print(tracker)
    return tracker[len(s2) - 1][len(s1) - 1]


print(levenshteinDistance("abc", "abcde"))
print(levenshteinDistance("biting", "mitten"))

# [['_', '_', 'a', 'b', 'c'], 
#  ['_',  0,   1,   2,   3], 
#  ['a',  1,   0,   1,   2], 
#  ['b',  2,   1,   0,   1], 
#  ['c',  3,   2,   1,   0], 
#  ['d',  4,   3,   2,   1]]


# [['_', '_', 'b', 'i', 't', 'i', 'n', 'g'], 
#  ['_',  0,   1,   2,   3,   4,   5,   6], 
#  ['m',  1,   1,   2,   3,   4,   5,   6], 
#  ['i',  2,   2,   1,   2,   2,   3,   4], 
#  ['t',  3,   3,   2,   1,   2,   3,   4], 
#  ['t',  4,   4,   3,   1,   2,   3,   4], 
#  ['e',  5,   5,   4,   2,   2,   3,   4], 
#  ['n',  6,   6,   5,   3,   3,   2,   3]]