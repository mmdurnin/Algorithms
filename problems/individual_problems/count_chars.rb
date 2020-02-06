# Write a function to check how many occurrences of a given character occur in a given string

def count_chars(string, char)
    count = 0
    string.each_char.with_index {|ch, i| count += 1 if ch == char}
    return count
end

p count_chars("maureen", "e")