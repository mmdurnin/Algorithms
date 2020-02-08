# inputs: str1, str2
# ex: 'abc', 'abcd'

# output: char
# ex: 'd'

# notes: 1 or 2 of the strings could be empty: return error

# 1. create a hash (char counts)
# 2. Return error if either of the strings is empty
# 3. iterate through range of longer string
# 4. add count to key of char for str 1, 
#      subtract from count at key of char for str 2 if i < len(str2)
# 5. iterate through the key of char counts hash
# 6. if char counts[key] != 0, return value


def find_extra_char(str1, str2):
    if str1 == "" or str2 == "": return "error: one or both strings empty"
    char_counts = {}

    for char in str1:
        char_counts[char] =  char_counts[char] + 1 if char in char_counts else 1

    for char in str2:
        char_counts[char] =  char_counts[char] - 1 if char in char_counts else -1


    for char in char_counts.keys():
        if char_counts[char] != 0: return char

print(find_extra_char('abc', 'abcd'))
print(find_extra_char('abc', ''))