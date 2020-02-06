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