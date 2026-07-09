class Observer:

    def update(self,msg):
        print(msg)



class Channel:

    def notify(self):
        user.update("New Video")


user=Observer()

c=Channel()

c.notify()