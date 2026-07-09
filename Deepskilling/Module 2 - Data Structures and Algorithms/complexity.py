# O(1)
def constant(arr):
    print(arr[0])


# O(n)
def linear(arr):
    for i in arr:
        print(i)


# O(n^2)
def square(arr):
    for i in arr:
        for j in arr:
            print(i,j)


arr=[1,2,3]

constant(arr)

linear(arr)