class AbsoluteStrategy {
    constructor(criterion) {
        this.criterion = criterion;
    }

    calculate(scores) {
        return scores.map(score => ({
            score,
            grade: this.getgrade(score)
        }))
    }

    getgrade(score) {
        if (score >= this.criterion.A) return "A";
        if (score >= this.criterion.B) return "B";
        if (score >= this.criterion.C) return "C";
        if (score >= this.criterion.D) return "D";
        return "F";
    }
}

export default AbsoluteStrategy;