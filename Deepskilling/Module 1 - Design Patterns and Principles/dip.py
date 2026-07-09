class Database:
    def connect(self):
        print("Database connected")


class Application:

    def __init__(self, db):
        self.db = db

    def start(self):
        self.db.connect()


db = Database()

app = Application(db)

app.start()