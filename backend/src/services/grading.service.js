import { calculateTotalScore } from "./totalScore.service.js"
import {
    calculateMean,
    calculateStdDev,
    calculatePercentile,
    calculateTScore
} from "./statistics.service.js";

export function generateGradeReport(course, studentScore) {

    // คำนวณ totalScore
    const policy = course.gradingPolicy;
    const stuTotal = studentScore.map((stuScore) => ({
        no: stuScore.no,
        totalScore: calculateTotalScore(stuScore.score, policy)
    }));

    // คำนวณสถิติรวม
    const totalScores = stuTotal.map(s => s.totalScore);
    const mean = calculateMean(totalScores);
    const stdDev = calculateStdDev(totalScores);

    // รวมผลลัพธ์
    return stuTotal.map(student => {
        const percentile = calculatePercentile(totalScores, student.totalScore)
        const tScore = calculateTScore(student.totalScore, mean, stdDev)

        const result = {
            no: student.no,
            totalScore: Number(student.totalScore.toFixed(2)),
            percentile: Number(percentile.toFixed(2)),
            tScore: Number(tScore.toFixed(2))
        }
        return result;
    })
}