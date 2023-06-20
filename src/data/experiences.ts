

export interface Experience {
    onGoing: boolean;
    type: "Job" | "Research" | "School" | "Volunteer";
    orgName: string;
    description: string;
    startDate: string;
    title: string;
    endDate?: string;
}


const experiences: Experience[] = [
    {
        onGoing: true,
        type: "School",
        orgName: "University of Utah",
        startDate: "Aug 2019",
        endDate: "May 2023",
        title: "Undergraduate Student",
        description: `I am a Student in University of Utah. 
                      I am majoring in Computer Science.`,
    },
    {
        onGoing: false,
        type: "Job",
        orgName: "Amazon Alexa SDK",
        startDate: "May 2022",
        endDate: "Aug 2022",
        title: "SDE Intern",
        description: "I worked as a software development engineer intern at Amazon in the summer of 2022. ",
    },
    {
        onGoing: false,
        type: "Job",
        orgName: "Pure Storage Business Operations",
        startDate: "June 2019",
        endDate: "Aug 2019",
        title: "Business Operation Intern",
        description: "I worked as a Business Operation intern at Pure Storage in the summer of 2019. ",
    },
    {
        onGoing: false,
        type: "Job",
        orgName: "Pure Storage Business Operations",
        startDate: "Jan 2020",
        endDate: "Aug 2020",
        title: "Cost Operation Engineer",
        description: "I worked as a Business Operation intern at Pure Storage in the summer of 2020. ",
    },
]


export default experiences;