def merge_sort(arr):

    if len(arr)<=1:
        return arr


    mid=len(arr)//2


    left=merge_sort(arr[:mid])

    right=merge_sort(arr[mid:])


    return sorted(left+right)



print(merge_sort([8,3,1,6]))