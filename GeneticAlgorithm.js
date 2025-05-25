export class GeneticAlgorithm {
    constructor(populationSize, boardSize, startState, goalState) {
        this.populationSize = populationSize;
        this.boardSize = boardSize;
        this.startState = startState;
        this.goalState = goalState;
        this.population = this.generatePopulation();
        this.sequence = [];
    }

    generatePopulation() {
        return Array.from({ length: this.populationSize }, () =>
            this.startState.map(row => row.map(val => val + Math.floor(Math.random())))
        );

    }

    calculateFitness(individual) {
        let fitnessScore = 0;
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                if (individual[i][j] !== this.goalState[i][j]) {
                    fitnessScore++;
                }
            }
        }
        return fitnessScore;
    }

    selectParents() {
        return this.population.sort((a, b) => this.calculateFitness(a) - this.calculateFitness(b)).slice(0, 15);
    }

    crossover(parent1, parent2) {
        let cutPoint = Math.floor(Math.random() * parent1.length);
        return parent1.map((row, i) => i < cutPoint ? [...row] : [...parent2[i]]);
    }

    mutate(individual, mutationRate = 0.2) {
        if (Math.random() < mutationRate) {
            let rowIndex = Math.floor(Math.random() * this.boardSize);
            let colIndex = Math.floor(Math.random() * this.boardSize);
            individual[rowIndex][colIndex] = this.goalState[rowIndex][colIndex];
        }
        return individual;
    }

    runGenerations(maxGenerations = 100) {
        while (true) {
            for (let gen = 0; gen < maxGenerations; gen++) {
                let parents = this.selectParents();
                this.population = parents.map(parent => this.mutate(this.crossover(parent, parent)));

                let bestSolution = this.population.sort((a, b) => this.calculateFitness(a) - this.calculateFitness(b))[0];

                this.sequence.push(bestSolution);
                if (this.calculateFitness(bestSolution) === 0) {
                    return bestSolution;
                }
            }
        }
    }

    checkEqualTables(array1, array2) {
        return JSON.stringify(array1) !== JSON.stringify(array2);
    }

    getSequence() {
        console.log("Genetic Algorithm Sequence:");
        // let lastSequence = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.sequence.forEach((generation, index) => {
            // if (index > 0) {
            //     lastSequence = this.sequence[index - 1];
            // }
            console.log("Gen " + index);
            console.table(generation);
            // if (this.checkEqualTables(lastSequence, generation)) {
            //     console.log("Gen " + index);
            //     console.table(generation);
            // }
        });
        return this.sequence;
    }
}
