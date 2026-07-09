class Node:

    def __init__(self,data):

        self.data=data
        self.prev=None
        self.next=None



a=Node(10)

b=Node(20)


a.next=b

b.prev=a


print(a.data)

print(a.next.data)