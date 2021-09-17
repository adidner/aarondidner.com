

export interface experienceSkillInterface {
    title: string;
    skills: string[]; //potentially to be expanded to a list of {skillTitle: string[], skillPicturePath: string[]}
}

export const experienceSkillData: experienceSkillInterface[] = [
    {
        title: "Front End Web Developement",
        skills: ["React","Redux","TypeScript","HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        title: "Backend Web Development",
        skills: ["C#","MySQL","SQL","Python","NodeJS", "C++", "Java"]
    },
    {
        title: "Mobile Development",
        skills: ["React Native","Expo","Java","Kotlin"]
    },
    {
        title: "Misc Skills",
        skills: ["Git Version Control","Test-Driven Developement","UI/UX Design","Agile Developement"]
    },
];