export const DEPARTMENTS =
    [
        'cs',
        'Math',
        'English',
        'Biology'
    ]

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => (
    {
        value : dept,
        label : dept
    }
))