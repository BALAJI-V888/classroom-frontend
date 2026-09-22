import { Subject } from "../types"

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "CS101",
        description:
            "Provides a foundation in programming concepts, algorithms, and problem-solving using modern programming languages.",
        department: "Computer Science",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        name: "Modern English Literature",
        code: "ENG205",
        description:
            "Explores major works in English literature from the 19th century to the present, focusing on themes, styles, and cultural contexts.",
        department: "English",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        name: "Linear Algebra",
        code: "MATH301",
        description:
            "Covers vector spaces, matrices, determinants, eigenvalues, and applications of linear algebra in science and engineering.",
        department: "Mathematics",
        createdAt: new Date().toISOString()
    }
];