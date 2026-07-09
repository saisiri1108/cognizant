class Payment:
    def pay(self):
        pass


class Card(Payment):
    def pay(self):
        print("Card Payment")


class UPI(Payment):
    def pay(self):
        print("UPI Payment")


for p in [Card(),UPI()]:
    p.pay()