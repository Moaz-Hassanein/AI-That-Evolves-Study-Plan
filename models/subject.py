class subject:
    def __init__(self, name, deadline, tasks, difficulty_level, type):
        self.name = name
        self.deadline = deadline
        self.tasks = tasks
        self.difficulty_level = difficulty_level
        self.type = type

    def return_info(self):
        return {
            "name": self.name,
            "deadline": self.deadline,
            "tasks": self.tasks,
            "difficulty_level": self.difficulty_level,
            "type": self.type
        }