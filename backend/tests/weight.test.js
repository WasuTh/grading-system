import { calculateWeightedScore } from "../src/services/weighted.serverice.js";
import { course, studentScore } from "../src/data/mock.js";

const total = calculateWeightedScore(
    studentScore[0].score,
    course.gradingPolicy
);
const total1 = calculateWeightedScore(
    studentScore[1].score,
    course.gradingPolicy
);
const total2 = calculateWeightedScore(
    studentScore[2].score,
    course.gradingPolicy
);
const total3 = calculateWeightedScore(
    studentScore[3].score,
    course.gradingPolicy
);
const total4 = calculateWeightedScore(
    studentScore[4].score,
    course.gradingPolicy
);

console.log(total);
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);