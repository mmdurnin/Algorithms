# create a matrix that counts up front to end, end to front, and so on
def generate_matrix(n)
    count = 1
    matrix = Array.new(n){Array.new(n, 0)}
    
    i = 0
    j = 0
    while i < n
        if j == 0
            matrix[i][j] = count
            (n-1).times do 
                j += 1
                count += 1
                matrix[i][j] = count
            end
        elsif j == n - 1
            matrix[i][j] = count
            (n-1).times do 
                j -= 1
                count += 1
                matrix[i][j] = count
            end
        end
        
        i += 1
        count += 1
    end
    return matrix
end



# create a matrix that counts up like a spiral (around the borders then inwards)
# def generate_spiral(n)
#     count = 1
#     matrix = Array.new(n){Array.new(n, 0)}
    
#     corners = [[0, 0], [0, n-1], [n-1, n-1], [n-1, 0]]
#     direction = ["right", "down", "left", "up"]

#     i = 0
#     j = 0
#     coords = [i, j]
    
#     while count <= Math.sqrt(n)
#         until coords[0] == corners[1][0] && coords[1] == corners[1][1]
#             matrix[i][j] = count
#             count += 1
#             coords = move(direction[0], [j, i])
#         end
#         corners[0] = move(direction[0], corners[0])
#         corners.push(corners.shift)
#         direction.push(direction.shift)
#     end

#     return matrix
# end


# def move(direction, coords)
#     i, j = coords[0], coords[1]
#     if direction == "right"
#         j += 1
#     elsif direction == "down"
#         i -= 1
#     elsif direction == "left"
#         j -= 1
#     elsif direction == "up"
#         i += 1
#     end
#     return [i, j]
# end

# 1   2   3   4   5
# 16  17  18  19  6
# 15  24  25  20  7
# 14  23  22  21  8
# 13  12  11  10  9


# 1   2   3   4   5
# 18  19  20  21  6
# 17  28  29  22  7
# 16  27  30  23  8
# 15  26  25  24  9
# 14  13  12  11  10

# [[1, 2],
#   3, 4]]

# [[ 1, 2, 3, 4,5],
#  [16,17,18,19,6],
#  [15,24,25,20,7],
#  [14,23,22,21,8],
#  [13,12,11,10,9]]

#  [[ 1, 2, 3, 4,5],
#   [16,17,18,19,6],
#   [15,0,23,44,7],
#   [14,0,22,46,8],
#   [13,12,11,10,9]]

# 1   2   3   4   
# 12  13  14  5
# 11  16  15  6
# 10  9   8   7

# 1   2   3
# 8   9   4
# 7   6   5

# def generate_spiral(n)
#     matrix = Array.new(n){Array.new(n, 0)}

#     rounds = 3
#     steps = n - 1

#     coords = [0, 0]
#     direction = ["right", "down", "left", "up"]
#     count = 1

#     until count > n ** 2
#         rounds.times do
#             steps.times do
#                 matrix[coords[0]][coords[1]] += count
#                 coords = advanceCoords(direction[0], coords)
#                 count += 1
                
#             end
#             direction.push(direction.shift)
#         end
#         rounds -= 1 if rounds > 1
#         steps -= 1 if steps > 1
#     end
#     return matrix
# end

def generate_spiral(n)
    matrix = Array.new(n){Array.new(n, 0)}

    coords = [0, 0]
    direction = ["right", "down", "left", "up"]
    count = 1

    until count > n ** 2
        matrix[coords[0]][coords[1]] += count
        temp = advanceCoords(direction[0], coords)

        if temp[0] < matrix.length && temp[1] < matrix.length && (matrix[temp[0]][temp[1]] == 0)
            coords = temp
        else
            direction.push(direction.shift)
            coords = advanceCoords(direction[0], coords)
        end

        count += 1
    end
    return matrix
end

def advanceCoords(direction, coords)
    i, j = coords[0], coords[1]
    if direction == "right"
        j += 1
    elsif direction == "down"
        i += 1
    elsif direction == "left"
        j -= 1
    elsif direction == "up"
        i -= 1
    end
    return [i, j]
end

puts "generating spiral"
# print generate_spiral(1)


# Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

# The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

# You may assume the integer does not contain any leading zero, except the number 0 itself.

def plus_one(digits)
    digits = digits.join.to_i + 1
    digits = digits.to_s
    digits.chars.map {|ch| ch.to_i}
end

# p plus_one([1, 2, 3])

# Given a sorted linked list, delete all duplicates such that each element appear only once.
# Input: 1->1->2
# Output: 1->2

# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end  

require 'set'
def subsets(nums)
    result = sub_sets(nums)
    result.push([])
end

def sub_sets(nums, storage_set=Set.new)
    return if nums.length <= 0
    return if storage_set.include?(nums)

    storage_set.add(nums)
    
    nums.each_with_index do |num, idx|
        storage_set.add([num])
        temp = nums[0...idx] + nums[idx+1..-1]
        # reversed = temp.reverse
        storage_set.add([num])
        # storage_set.add(temp)
        # storage_set.add(reversed)
        subs = sub_sets(temp, storage_set)
        if !!subs 
            subs.each do |sub| 
                storage_set.add(sub) if (!storage_set.include?(sub)) && !!sub
            end
        end
        # storage_set.add(subsets(reversed, storage_set))
    end
    return storage_set.to_a
end


# p subsets([1,2,3,4,5,6,7,8,10,0])
def search_matrix(matrix, target)
    # search the matrix
    i = 0
    while matrix[i] <= target
        i += 1
    end
    sub = matrix[i-1]

    # search the subarray
    i = 0
    while sub[i] <= target
        return true if sub[i] == target
        i += 1
    end
    return false

end

# p search_matrix(5)

# Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.

def search_matrix(matrix, target)
    return false if matrix == [] || matrix == [[]]
    sub = []
    matrix.each_with_index do |s, i|
        return true if s[0] == target
        sub = s if s[0] < target
        p s
        p i
    end
    p "sub"
    p sub
    sub.each_with_index do |num, i|
        return true if num == target 
    end
    return false
end


# Write me a method that will check to see if a string is a palindrome
def check_palindrome(string)
    string.each_char.with_index do |char, idx|
        return false if char != string[string.length - idx - 1]
    end

    return true
end

# p check_palindrome("racecar")
# p check_palindrome("pumpkin")
# p check_palindrome("raccar")

# Write a function to check how many occurrences of a given character occur in a given string

def count_chars(string, char)
    count = 0
    string.each_char.with_index {|ch, i| count += 1 if ch == char}
    return count
end

# p count_chars("maureen", "e")

# Given an array of numbers 1..i, one of those numbers is a duplicate. Write a method to find that duplicate

def find_dup(arr)
    final_num = arr.length - 1

    no_dup = (1..final_num).to_a.sum
    sum = arr.sum

    return sum - no_dup
end

# p find_dup([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Now correct method to return back multiple #s that are duplicates

require 'set'

def find_dups(arr)
    visited = {}
    mults = Set.new()

    arr.each_with_index do |num, i|
        if !visited[num]
            visited[num] = i 
        else
            mults.add(num)
        end
    end

    return mults.to_a
end

# p find_dups([1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10])

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