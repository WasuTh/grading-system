import GradingEngine from "../core/GradingEngine.js";
import AbsoluteStrategy from "../core/strategies/criterion/AbsoluteStrategy.js";

const scores = [78, 92, 85, 45, 50];

const criteria = {
  A: 92,
  B: 70,
  C: 60,
  D: 50
};

const strategy = new AbsoluteStrategy(criteria);

const engine = new GradingEngine(strategy);

const result = engine.calculate(scores);

console.log(result);