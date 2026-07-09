def linear(arr,target):

    for i in range(len(arr)):

        if arr[i]==target:
            return i

    return -1



arr=[5,8,2,9]

print(linear(arr,2))