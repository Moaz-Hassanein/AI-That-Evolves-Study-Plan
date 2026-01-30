
"""
Session = {
    "subject": "Math",
    "duration": 45,        # minutes
    "difficulty": 2,       # 1 easy – 3 hard
    "type": "practice",    # video / reading / practice
    "time_slot": "evening" # morning / afternoon / evening
}
"""

class session:
    def __init__(self, subject, duration, difficulty_level):
        self.subject = subject
        self.duration = duration
        self.difficulty_level = difficulty_level