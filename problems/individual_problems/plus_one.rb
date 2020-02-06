# Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
# The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
# You may assume the integer does not contain any leading zero, except the number 0 itself.

def plus_one(digits)
    digits = digits.join.to_i + 1
    digits = digits.to_s
    digits.chars.map {|ch| ch.to_i}
end

p plus_one([1, 2, 3])