class Computer:

    def __init__(self):
        self.cpu = None
        self.ram = None


class Builder:

    def build_cpu(self):
        self.computer.cpu = "i7"

    def build_ram(self):
        self.computer.ram = "16GB"


    def build(self):
        self.computer = Computer()

        self.build_cpu()
        self.build_ram()

        return self.computer



b = Builder()

c = b.build()

print(c.cpu)
print(c.ram)