export function calculateMean(scores) {
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}

export function calculateVariance(scores, mean) {
    return scores.reduce((sum, s) => sum + (s - mean) ** 2, 0) / scores.length;
}

export function calculateStdDev(scores) {
    const mean = calculateMean(scores);
    const variance = calculateVariance(scores, mean);
    return Math.sqrt(variance);
}

export function calculatePercentile(scores, targetScore) {
    const N = scores.length;
    const B = scores.filter(s => s < targetScore).length;
    const E = scores.filter(s => s === targetScore).length;

    return ((B + 0.5 * E) / N) * 100;
}

export function calculateTScore(score, mean, stdDev) {
    if (stdDev === 0) return 50;
    return 50 + 10 * ((score - mean) / stdDev);
}