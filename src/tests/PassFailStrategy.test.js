import GradingEngine from "../core/GradingEngine.js";
import PassFailStrategy from "../core/strategies/criterion/PassfailStrategy.js";

const scores = [30, 80, 60];

const passScore = 50;

const strategy = new PassFailStrategy(passScore);

const engine = new GradingEngine(strategy);

const result = engine.calculate(scores);

console.log(result);