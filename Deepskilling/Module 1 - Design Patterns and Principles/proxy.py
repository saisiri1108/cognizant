class RealObject:

    def show(self):
        print("Real Object")


class Proxy:

    def __init__(self):
        self.obj = RealObject()


    def show(self):
        print("Proxy checking")
        self.obj.show()



p = Proxy()

p.show()