# Determine whether an integer is a palindrome. An integer is a palindrome 
# when it reads the same backward as forward.
def palindrome_num(num):
    if num <  0: return false
    str = `num`
    for idx, char in enumerate(str):
        if char != str[len(str) - idx - 1]: return false
    return true