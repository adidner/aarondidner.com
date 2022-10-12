

export interface experienceSkillInterface {
    title: string;
    skills: string[]; //potentially to be expanded to a list of {skillTitle: string[], skillPicturePath: string[]}
}

export const experienceSkillData: experienceSkillInterface[] = [
    {
        title: "Front End",
        skills: ["React","Redux","TypeScript","HTML", "CSS", "Javascript", "SCSS", "Jest", "Cypress", "Storybook", "Chromatic"]
    },
    {
        title: "Backend",
        skills: ["Craft CMS", "Docker", "C#", ".NET","MySQL","SQL","Python","NodeJS", "C++", "Java"]
    },
    {
        title: "Mobile",
        skills: ["React Native","Java","Kotlin"]
    },
    {
        title: "Misc Skills",
        skills: ["Git Version Control","Test-Driven Developement","UI/UX Design","Agile", "Scrum"]
    },
];