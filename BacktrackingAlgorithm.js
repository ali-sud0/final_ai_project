export class BacktrackingAlgorithm {
    constructor(boardSize, startState, goalState) {
        this.boardSize = boardSize;
        this.startState = JSON.parse(JSON.stringify(startState));
        this.goalState = goalState;
        this.solutionFound = false;
        this.sequence = [];
    }

    isGoal(state) {
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                if (state[i][j] !== this.goalState[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    cloneState(state) {
        return state.map(row => [...row]);
    }

    solve(row = 0, col = 0, currentState = this.cloneState(this.startState)) {
        if (this.solutionFound) return;

        this.sequence.push(this.cloneState(currentState));

        if (this.isGoal(currentState)) {
            this.solutionFound = true;
            return;
        }

        if (row >= this.boardSize) return;

        let nextRow = col === this.boardSize - 1 ? row + 1 : row;
        let nextCol = col === this.boardSize - 1 ? 0 : col + 1;

        if (currentState[row][col] === this.goalState[row][col]) {
            this.solve(nextRow, nextCol, currentState);
        } else {
            let temp = currentState[row][col];
            currentState[row][col] = this.goalState[row][col];
            this.solve(nextRow, nextCol, currentState);
            currentState[row][col] = temp;
        }
    }

    
    getSequence() {
        let result = [];
        let lastState = this.sequence[0];

        result.push(this.startState);
        this.sequence.forEach((state) => {
            let queenCount = 0;
            for (let i = 0; i < this.boardSize; i++) {
                for (let j = 0; j < this.boardSize; j++) {
                    if (state[i][j] === 1) {
                        queenCount++;
                    }
                }
            }
            if (queenCount === 4) {
                if (JSON.stringify(lastState) !== JSON.stringify(state)) {
                    result.push(state);
                    lastState = state;
                }
            }
        });
        return result;
    }
}
