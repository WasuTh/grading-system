import { calculateTotalScore } from "../utils/totalScore.js";

export function validateWeight(weights) {
    const total = weights.coursework + weights.midterm + weights.final;
    return total === 100;
}

export function calculateStudentTotal(data) {
    return calculateTotalScore(data);
}