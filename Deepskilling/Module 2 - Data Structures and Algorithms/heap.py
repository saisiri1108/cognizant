import heapq


arr=[5,1,8,2]


heapq.heapify(arr)


while arr:

    print(heapq.heappop(arr))