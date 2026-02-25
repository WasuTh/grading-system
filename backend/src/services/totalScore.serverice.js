import { validatePolicy, validateStudentScore } from "./validate.service.js";

export function calculateTotalScore(score, policy) {
    validatePolicy(policy);
    validateStudentScore(score, policy);

    const sections = Object.keys(policy);

    const total = sections.reduce((sum, section) => {
        const studentScore = score[section] ?? 0;
        const maxScore = policy[section].maxScore;
        const weight = policy[section].weight;

        const normalized = studentScore / maxScore;
        return sum + normalized * weight;
    }, 0);

    return Number(total.toFixed(2));
}