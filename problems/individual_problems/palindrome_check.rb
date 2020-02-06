# Write me a method that will check to see if a string is a palindrome
def check_palindrome(string)
    string.each_char.with_index do |char, idx|
        return false if char != string[string.length - idx - 1]
    end

    return true
end

p check_palindrome("racecar")
p check_palindrome("pumpkin")
p check_palindrome("raccar")