import { generateGradeReport } from "../src/services/grading.service.js"
import { course, studentScore } from "../src/data/mock.js"

const result = generateGradeReport(course, studentScore)

console.log(result);