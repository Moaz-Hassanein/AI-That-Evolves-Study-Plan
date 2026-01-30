import random
from models.session import session as Session


"""
chromosome = [
    [  # Day 1
        {"subject": "Math", "duration": 45, "difficulty": 2, "type": "practice", "time_slot": "evening"},
        {"subject": "AI", "duration": 30, "difficulty": 1, "type": "video", "time_slot": "night"}
    ],
    [  # Day 2
        {"subject": "Math", "duration": 60, "difficulty": 3, "type": "practice", "time_slot": "morning"}
    ],
    ...
]
"""
class studyDay:
    def __init__(self, min_subjects_per_day, max_subjects_per_day):
        self.sessions = []
        num_sessions = random.randint(min_subjects_per_day, max_subjects_per_day)
        for _ in range(num_sessions):
            sess = Session(#placeholder : values needed for subject, duration, difficulty_level
                        )
            self.sessions.append(sess)