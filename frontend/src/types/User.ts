export type User = {
    id: number
    name: string
    age: number
    school: string
    program: string
    year: number
    pfp: string

    studySubjects: string[]
    studyStyle: "solo" | "group" | "either"
    skillLevel: "beginner" | "intermediate" | "advanced"
    studyGoals: string[]

    availability: string[]
    studyMode: "online" | "in-person" | "hybrid"
    location: string

    languages: string[]
    bio: string
}