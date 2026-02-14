class PassFailStrategy {
  constructor(passScore) {
    this.passScore = passScore;
  }

  calculate(scores) {
    return scores.map(score => ({
      score,
      grade: score >= this.passScore ? "PASS" : "FAIL"
    }));
  }
}

export default PassFailStrategy;