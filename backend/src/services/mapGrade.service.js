export function mapGrade (score, gradeScale) {
    const match = gradeScale.find(scale => 
        score >= scale.min && score < scale.max
    )
    return match.grade
}