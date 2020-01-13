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
print generate_spiral(1)


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