from copy import copy, deepcopy

# In a given grid, each cell can have one of three values:

# the value 0 representing an empty cell;
# the value 1 representing a fresh orange;
# the value 2 representing a rotten orange.
# Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

def rotten_oranges(grid):
    good_fruit = True
    minutes = 0
    tempgrid = deepcopy(grid)

    def valid_and_ripe(i, j):
        if i > -1 and i < len(grid):
            if j > -1 and j < len(grid[i]):
                if tempgrid[i][j] == 1:
                    return True
        return False

    def search(i, j):
        up = i - 1
        down = i + 1
        left = j - 1
        right = j + 1

        if valid_and_ripe(up, j) or valid_and_ripe(down, j) or valid_and_ripe(i, left) or valid_and_ripe(i, right):
            return True
        else:
            return False


    def rot(i, j):
        up = i - 1
        down = i + 1
        left = j - 1
        right = j + 1
        if valid_and_ripe(up, j): tempgrid[up][j] = 2
        if valid_and_ripe(down, j): tempgrid[down][j] = 2
        if valid_and_ripe(i, left): tempgrid[i][left] = 2
        if valid_and_ripe(i, right): tempgrid[i][right] = 2


    
    while good_fruit == True:
        good_fruit = False
        
        for i, sub in enumerate(grid):
            for j, orange in enumerate(sub):
                if orange == 2:
                    if (search(i, j)):
                        good_fruit = True
                        rot(i, j)
                    
        if good_fruit == True:
            minutes += 1
            grid = deepcopy(tempgrid)

    for sub in grid:
        for orange in sub:
            if orange == 1: return -1

    return minutes

print(rotten_oranges([[2,1,1],[0,1,1],[1,0,1]]))