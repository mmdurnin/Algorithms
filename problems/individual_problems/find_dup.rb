# Given an array of numbers 1..i, one of those numbers is a duplicate. Write a method to find that duplicate

def find_dup(arr)
    final_num = arr.length - 1

    no_dup = (1..final_num).to_a.sum
    sum = arr.sum

    return sum - no_dup
end

p find_dup([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10])