class GradingEngine {
    constructor(strategy) {
        this.strategy = strategy
    }

    setStratgy(strategy) {
        this.strategy = strategy
    }

    calculate(students, config) {
        if (!this.strategy) {
            throw new Error("Grading strategy is not set");
        }

        if (!students || students.length === 0) {
            throw new Error("Student data is required");
        }

        return this.strategy.calculate(students, config);
    }
}

module.exports = GradingEngine;