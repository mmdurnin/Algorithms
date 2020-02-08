# Given an array of integers, each integer represents a jump of its value in the array.
# For instance, 2 represents a jump of 2 indices forward in the array. -3 represents a jump of
# 3 indices backward in the array. If a jump spills past the array's bounds, it wraps over to
# the other side. (A jump of -1 at index 0 will land at the last index of the array). Write a
# function that returns a boolean representing whether the jumps in the array form a single cycle.
# A single cycle occurs if, starting at any index in the array and following the jumps, every element
# is visited exactly once before landing back on the starting index

def hasSingleCycle(array):
    break

print(hasSingleCycle([2, 3, 1, -4, -4, 2])) # True
print(hasSingleCycle([1, -1, 1, -1])) # False




# Write a function that ttakes in two non-empty arrays of integers. The function should find the pair
# of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero
# The function should return an array containing these two numbers, with the number from the firstt array in first
# position. Assume that there will only be one pair of numbers with the smallest difference

def smallestDifference(arrayOne, arrayTwo):
    pass

print(smallestDifference([-1, 5, 10,  20, 28, 3]. [26, 134, 135, 15, 17])) # [28, 26]