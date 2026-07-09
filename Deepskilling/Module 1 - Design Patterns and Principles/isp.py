class Printer:
    def print_document(self):
        print("Printing")


class Scanner:
    def scan(self):
        print("Scanning")


p = Printer()
p.print_document()

s = Scanner()
s.scan()