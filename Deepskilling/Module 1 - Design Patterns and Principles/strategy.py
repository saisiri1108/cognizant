class Card:

    def pay(self):
        print("Paid using card")



class UPI:

    def pay(self):
        print("Paid using UPI")



class Payment:

    def __init__(self,strategy):
        self.strategy=strategy


    def make_payment(self):
        self.strategy.pay()



p = Payment(UPI())

p.make_payment()    