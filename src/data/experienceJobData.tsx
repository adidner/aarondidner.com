 export interface experienceJobInterface {
     roleTitle: string;
     companyTitle: string;
     startDate: string;
     endDate: string;
     location: string;
     experienceBody: experienceBodyInterface[];
     //extra to add stuff and put in a conditionally expandable show more kind of tab/section
     bestPart: string;
     worstPart: string;
     reflection: string;
     companySize: string;
     techStack: string[];
     teamSize: string;

 }

 export interface experienceBodyInterface {
     introPrompt: string;
     bulletList: string[];
 }


 export const experienceJobdata: experienceJobInterface[] = [
    {
        roleTitle: "Associate Software Engineer",
        companyTitle: "Alion Science and Technology",
        startDate: "July 2020",
        endDate: "Present",
        location: "Hanover, MD",
        experienceBody: [
            {
                introPrompt: "Working on expanding design standards and creating a component library for developers",
                bulletList: ["Implemented new reusable components based on our needs in React and TypeScript","Trained teammates in best practices during code reviews and informal conferences","Tested new components extensively","Integrated new testing platforms into existing build systems"],
            },
            {
                introPrompt: "Working on operator user interface and sensor integration for reconnaisance aircraft",
                bulletList: ["Designed User Interfaces and iterated on said designs with insight from product owner","Implemented User Interfaces designs in React and TypeScript","Developed parallel processing Orchestrators to parse and reconfigure data in C++","Integrated parsers created by teammates into the Orchestrator"],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "",//"Designing and implementing my own tools from scratch is always a lot of fun because its something I created mostly from scratch. Working on the component library has given me a lot of expose to lower level concepts and expertise and learning of css selectors and css priority. Also more experience unit testing. Flexability is pretty nice in terms of working from home and everyone is generally quite nice and friendly. Also on the component library team I have excellent mentor ship and good pratices enforced",
        worstPart: "",//"The main code base outside the component library is quite old and has a lot of tech debt that makes many modern practices challenging. Feedback is soemtimes hard to come by and timelines as well. Sometimes I feel like my work is being undervalued despite its high quality and volume",
        reflection: "",
        companySize: "3,000",
        techStack: ["React", "TypeScript", "C++"],
        teamSize: "5",
    },
    {
        roleTitle: "Mobile Software Developer & Full Stack Software Developer",
        companyTitle: "Virtual Concierge Service",
        startDate: "September 2019",
        endDate: "July 2020",
        location: "Corvallis, OR",
        experienceBody: [
            {
                introPrompt: "Created a prototype Mobile App in React Native to gauge interest in having Airbnb hosts use Amazon Alexas to help guests troubleshoot problems via App rather than Web portal",
                bulletList: ["Directed Weekly meetings with product owner and backend team","Wrote formal documentation for the application","Designed mockups and iterated on said design as requirements changed","Implemented said mockups in React Native and JavaScript", "Launched the mobile application for Android devices"],
            },
            {
                introPrompt: "Created a custom configuration web portal to allow hosts to modify their Alexa voice menu trees",
                bulletList: ["Designed mockups for application UI as well as Entity Relation Diagrams for SQL design","Iteration on design with product owner","Implemented design in Angular, C# and MySQL"],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "Leading the mobile dev team was a pleasure and a priviledge, getting recongition for our product owner for the responsibility I was taking as well as the quality I we producted was wonderful. For the web world getting to apply a lot of my conceptual full stack knowledge in a more practical manner and getting lots of hands on experience and learning was invaluble",
        worstPart: "At times I felt a bit bossy towards my team just because I had a lot of experience I was trying to leverage. For the second project is was hard being on my own mainly and I think my lack of familiarity with Angular was a large obstacle.",
        reflection: "I think growing as a communicator in sensitive mentorship roles is important. I also think recongizing when it might be advantageous to get more guidance or take a few days to develop a better understanding of a new framework would be good for me",
        companySize: "9",
        techStack: ["React Native", "Angular", "MySQL", "C#", ".Net"],
        teamSize: "3",
    },
    {
        roleTitle: "Teaching Assistant (TA)",
        companyTitle: "Oregon State University",
        startDate: "September 2019",
        endDate: "December 2019",
        location: "Corvallis, OR",
        experienceBody: [
            {
                introPrompt: "Lectured and hosted office hours to help students internalize their knowledge of Data Structures",
                bulletList: ["Evaluated student assessments (quizzes, tests, and assignments)","Assisted students with assignments (including troubleshooting technical bugs)"],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "Fun job, helping students is always a pleasure and refreshing my skills with data structures is always a plus. Definietly enjoyed helping and teaching those around me such useful and pivotal skills",
        worstPart: "Sometimes its hard to have lots of pressure on you to know the right answer and figure out whats wrong. Also it can be de-motivating when someones coming to you for help and you can't do much for whatever reason (particularly weird bugs or seg-faults)",
        reflection: "I think teaching is really fufilling and I would definietly hope to do more of it in the future. Also GDB is quite useful and a good environment/IDE is as well",
        companySize: "1,200",
        techStack: ["NA"],
        teamSize: "1",
    },
    {
        roleTitle: "Software Development Intern",
        companyTitle: "Pivotal Software, Inc.",
        startDate: "June 2019",
        endDate: "September 2019",
        location: "San Francisco, CA",
        experienceBody: [
            {
                introPrompt: "Worked on a web app written in Java Spring and ReactJS, applying agile and test-driven development princiiples to drive best practices",
                bulletList: ["Collaborated to write documetnation for 1.10 version release of software","Updated Continuous Integration pipelines","Enhanced backend endpoints to include information for new feature sets"],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "Really nice people and pairing was very good for learning and becoming more aware of best practices and how to follow issues through the stack",
        worstPart: "Working in a mainly paired environment put a lot of pressure on me and was sometimes emotionally exahusting. Work was somtimes overwhelming given the size and complexity of the codebase. I wish more feedback was given more often and sometimes it felt like a politics of being liked game at the company. Also I wish I interacted more with the other interns an issue with being one of the few people from a quarter rather than semester school",
        reflection: "Overall I learned a lot, I got lots of exposure to the general flow of software engineering, agile and test driven development. I wish I'd relaxed more and tried to learn more of the tech stack independently so I could contribute more meaningfully. ",
        companySize: "3,000",
        techStack: ["ReactJS", "Java Spring"],
        teamSize: "6",
    },
 ];