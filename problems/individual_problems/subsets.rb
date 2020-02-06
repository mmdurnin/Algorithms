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


p subsets([1,2,3,4,5,6,7,8,10,0])