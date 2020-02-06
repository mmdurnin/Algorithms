# Write a method that will take a number and retturn a count of the number of "secret codes" it will return
# The secret code is such that every letter in the alphabet maps to a letter
# ex: 
# 12258:
# abbeh
# aveh
# abyh
# lbeh
# lyh

def decode(code)
    str = code.to_s
    return str.length if str.length <= 1

    count = 1
    i = 0
    while i < str.length - 1
        number = str[i].to_i
        next_num = str[i+1].to_i
        count += 1 if number == 1
        count += 1 if number == 2 && next_num <= 6

        i += 1
    end

    return getFib(count)
end

def getFib(count)
    return count if count <= 2
    return getFib(count - 2) + getFib(count - 1)
end

p decode(12258)