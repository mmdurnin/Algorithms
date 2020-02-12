def minNumberOfCoinsForChange(n, denoms):
    # initialize table of n + 1 elements that equal infinity, table @ idx 0 = 0
    tracker = [float('inf')] * (n + 1)
    tracker[0] = 0

    for coin in denoms:
        for idx, factor in enumerate(tracker):
            if coin <= idx:  
                # change tracker @ current cell to 1 + change count, IF you can make change
                # (by selectinng the min of tracker[idx] & tracker[idx - coin] + 1, you're only changing current cell
                #  if tracker[idx-coin] has already been changed and is not infinity)
                tracker[idx] = min(tracker[idx], 1 + tracker[idx - coin])
                
    if tracker[-1] == float('inf'): return -1 
    return tracker[-1]

print(minNumberOfCoinsForChange(7, [1, 5, 10]))