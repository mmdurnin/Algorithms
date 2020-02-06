def solve_matrix(after)
    before = after
    i = 0
    while i < after.length 
        j = 0

        while j < after[i].length

            if i == 0 && j == 0
                before[i][j] = before[i][j]
            elsif i == 0
                before[i][j] = before[i][j] - before[i][j-1]
            elsif j == 0
                before[i][j] = before[i][j] - before[i-1][j]
            else
                before[i][j] = before[i][j] - before[i-1][j-1]
            end

            j += 1
        end

        i += 1
    end
    return before
end

p solve_matrix([[2, 1], [5, 4]])


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