class Singleton:

    obj=None

    def __new__(cls):
        if cls.obj is None:
            cls.obj=super().__new__(cls)

        return cls.obj


a=Singleton()
b=Singleton()

print(a==b)