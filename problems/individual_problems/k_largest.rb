def build_min_heap(arr, i, l)
    left_idx = (i * 2) + 1
    right_idx = (i * 2) + 2
    left_val = arr[left_idx]
    right_val = arr[right_idx]

    if left_idx > l 
        left_val = arr[i] + 1
    end
    if right_idx > l
        right_val = arr[i] + 1
    end

    if arr[i] < left_val && arr[i] < right_val
        return arr
    end

    pivot = left_val < right_val ? left_idx : right_idx
    swap(arr, i, pivot)

    return build_min_heap(arr, pivot, l)

end

def swap(arr, i, j)
    arr[i], arr[j] = arr[j], arr[i]
    return arr
end

# build starting heap - sort heap in array from 0 to k (not the whole array)
def heap_sort(arr, k)
    l = k - 1
    while l >= 0 do 
        build_min_heap(arr, l, k - 1)
        l -= 1
    end
end

def k_largest(arr, k)
    # iterate through array and organize nums into heap if they're greater than head
    # (swap smallest of heap with new num)
    # (reorganize heap incase new num > children)
    heap_sort(arr, k)
    idx = k + 1
    while idx < arr.length do
        if arr[idx] > arr[0]
            swap(arr, 0, idx)
            build_min_heap(arr, 0, k - 1)
        end
        idx += 1
    end

    # now actually sort sort the heap (move head into sorted area, sort, repeat)
    idx = k
    while idx > 0 do
        swap(arr, 0, idx)
        build_min_heap(arr, 0, k - 1)
        idx -= 1
    end
    return arr[0...k]
end

p k_largest([5, 4, 3, 2, 1, 90, 12, 4, 87, 54, 7, 12, 68, 900], 5)