import { calculateTotalScore } from "../src/services/totalScore.service.js";
import {
    calculateMean,
    calculateStdDev,
    calculatePercentile,
    calculateTScore
} from "../src/services/statistics.service.js";

import { course, studentScore } from "../src/data/mock.js";

// คำนวณ totalScore ของทุกคน
const totals = studentScore.map(student =>
    calculateTotalScore(student.score, course.gradingPolicy)
);

console.log("Total Scores:", totals);

// คำนวณ mean
const mean = calculateMean(totals);
console.log("Mean:", mean);

// คำนวณ stdDev
const stdDev = calculateStdDev(totals);
console.log("StdDev:", stdDev);

// percentile ของคนแรก
const percentile = calculatePercentile(totals, totals[0]);
console.log("Percentile (student 1):", percentile);
const percentile1 = calculatePercentile(totals, totals[1]);
console.log("Percentile (student 2):", percentile1);
const percentile2 = calculatePercentile(totals, totals[2]);
console.log("Percentile (student 3):", percentile2);
const percentile3 = calculatePercentile(totals, totals[3]);
console.log("Percentile (student 4):", percentile3);
const percentile4 = calculatePercentile(totals, totals[4]);
console.log("Percentile (student 5):", percentile4);

// tScore ของคนแรก
const tScore = calculateTScore(totals[0], mean, stdDev);
console.log("TScore (student 1):", tScore);
const tScore1 = calculateTScore(totals[1], mean, stdDev);
console.log("TScore (student 2):", tScore1);
const tScore2 = calculateTScore(totals[2], mean, stdDev);
console.log("TScore (student 3):", tScore2);
const tScore3 = calculateTScore(totals[3], mean, stdDev);
console.log("TScore (student 4):", tScore3);
const tScore4 = calculateTScore(totals[4], mean, stdDev);
console.log("TScore (student 5):", tScore4);