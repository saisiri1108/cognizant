class TV:

    def on(self):
        print("TV ON")



class Command:

    def __init__(self,tv):
        self.tv=tv


    def execute(self):
        self.tv.on()



tv = TV()

cmd = Command(tv)

cmd.execute()