class Car:
    def show(self):
        print("Car")


class Bike:
    def show(self):
        print("Bike")


class Factory:

    def create(self,type):

        if type=="car":
            return Car()

        return Bike()


f=Factory()

obj=f.create("car")

obj.show()