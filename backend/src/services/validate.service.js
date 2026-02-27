export function validatePolicy(policy) {
    const sections = Object.keys(policy);

    const totalWeight = sections.reduce((sum, section) =>
        sum + policy[section].weight
        , 0);

    if (totalWeight !== 100) {
        throw new Error("Total weight must equal 100%");
    }

    sections.forEach(section => {
        if (policy[section].maxScore <= 0) {
            throw new Error(`Max score for ${section} must be greater than 0`);
        }
    });

    return true;
}

export function validateStudentScore(score, policy) {
    const sections = Object.keys(policy);

    sections.forEach(section => {
        const studentScore = score[section] ?? 0;
        const maxScore = policy[section].maxScore;

        if (studentScore > maxScore) {
            throw new Error(
                `Score for ${section} cannot exceed max score (${maxScore})`
            );
        }

        if (studentScore < 0) {
            throw new Error(`Score for ${section} cannot be negative`);
        }
    });

    return true;
}