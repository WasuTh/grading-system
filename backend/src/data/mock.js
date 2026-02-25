export const course = {
    name: "Web Programming",
    gradingPolicy: {
        coursework: {
            maxScore: 30,
            weight: 20
        },
        midterm: {
            maxScore: 50,
            weight: 30
        },
        final: {
            maxScore: 50,
            weight: 50
        }
    },
    gradeScale: [
        { grade: "A", min: 80, max: 100 },
        { grade: "B", min: 70, max: 79 },
        { grade: "C", min: 60, max: 69 },
        { grade: "D", min: 50, max: 59 },
        { grade: "F", min: 0, max: 49 }
    ]
}

export const studentScore = [
    {
        no: 1,
        score: {
            coursework: 20,
            midterm: 40,
            final: 40
        },
    },
    {
        no: 2,
        score: {
            coursework: 25,
            midterm: 35,
            final: 45
        },
    },
    {
        no: 3,
        score: {
            coursework: 20,
            midterm: 10,
            final: 50
        },
    },
    {
        no: 4,
        score: {
            coursework: 15,
            midterm: 25,
            final: 25
        },
    },
    {
        no: 5,
        score: {
            coursework: 10,
            midterm: 30,
            final: 30
        },
    },
]