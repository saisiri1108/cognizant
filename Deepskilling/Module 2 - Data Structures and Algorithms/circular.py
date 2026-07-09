class Node:

    def __init__(self,data):

        self.data=data
        self.next=None



a=Node(10)

b=Node(20)


a.next=b

b.next=a



temp=a


for i in range(5):

    print(temp.data)

    temp=temp.next