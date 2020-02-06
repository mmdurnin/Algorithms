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

p find_dups([1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10])