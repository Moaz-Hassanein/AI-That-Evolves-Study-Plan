import random
from models.day import studyDay 
from models.session import session as Session

class Population:
    def __init__(self, pop_size, mutation_rate):
        self.pop_size = pop_size
        self.mutation_rate = mutation_rate
        self.individuals = [self.create_chromosome() for _ in range(pop_size)]


    #Chromosome = [Day1, Day2, ..., Day7]
    def create_chromosome(self, num_days):
        chromosome = []
        for _ in range(num_days):
            day = studyDay()
            chromosome.append(day)
        return chromosome