# create a matrix that counts up like a spiral (around the borders then inwards)

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