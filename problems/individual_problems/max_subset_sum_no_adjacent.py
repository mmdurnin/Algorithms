def maxSubsetSumNoAdjacent(array):
# 	base cases
    if len(array) < 1: 
        return 0
    if len(array) == 1: 
        return array[0]
    if len(array) == 2: 
        if array[0] > array[1]: 
            return array[0]
        else:
            return array[1] 
    #   logic
    option1 = array[0] + maxSubsetSumNoAdjacent(array[2:])
    option2 = maxSubsetSumNoAdjacent(array[1:])
    if option1 > option2 and option1 > array[0]:
        return option1
    elif option2 > option1 and option2 > array[0]:
        return option2
    else:
        return array[0]


print(maxSubsetSumNoAdjacent([1, 2, 3, 4, 5, 6, 7]))

print(maxSubsetSumNoAdjacent([-1, 1, -1, 1, -1, 1, 1]))