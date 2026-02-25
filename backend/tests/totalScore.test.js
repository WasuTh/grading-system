import { calculateTotalScore } from "../src/services/totalScore.service.js";
import { course, studentScore } from "../src/data/mock.js";

const total = calculateTotalScore(
    studentScore[0].score,
    course.gradingPolicy
);
const total1 = calculateTotalScore(
    studentScore[1].score,
    course.gradingPolicy
);
const total2 = calculateTotalScore(
    studentScore[2].score,
    course.gradingPolicy
);
const total3 = calculateTotalScore(
    studentScore[3].score,
    course.gradingPolicy
);
const total4 = calculateTotalScore(
    studentScore[4].score,
    course.gradingPolicy
);

console.log(total);
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);