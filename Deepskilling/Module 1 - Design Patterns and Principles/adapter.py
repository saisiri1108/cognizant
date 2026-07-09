class Old:
    def old_method(self):
        print("Old method")


class Adapter:

    def __init__(self,obj):
        self.obj=obj

    def new_method(self):
        self.obj.old_method()


a=Adapter(Old())

a.new_method()