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
        { grade: "A", min: 80, max: 101 },
        { grade: "B", min: 70, max: 80 },
        { grade: "C", min: 60, max: 70 },
        { grade: "D", min: 50, max: 60 },
        { grade: "F", min: 0, max: 50 }
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