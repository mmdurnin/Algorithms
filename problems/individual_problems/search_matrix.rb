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

p search_matrix(5)


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