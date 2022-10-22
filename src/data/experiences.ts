

export interface Experience {
    onGoing: boolean;
    type: "Job" | "Research" | "School" | "Volunteer";
    orgName: string;
    description?: string;
}


const experiences: Experience[] = [
    {
        onGoing: true,
        type: "School",
        orgName: "University of Utah",
        description: "I am a research assistant in the Computer Science department at the University of Utah. I am working on a project called CAPS (Computer Aided Personalized Surgery) with Dr. David Kaeli. CAPS is a surgical planning tool that uses machine learning to predict the outcome of a surgery. I am working on the front-end of the project using React and Typescript."
    },
    {
        onGoing: false,
        type: "Job",
        orgName: "Amazon Alexa SDK",
        description: "I worked as a software development engineer intern at Amazon in the summer of 2022. I worked on the Amazon Alexa team. I worked on a project called Music Discovery. Music Discovery is a feature that recommends music to users based on their listening history. I worked on the front-end of the project using React and Typescript.",
    },
    {
        onGoing: false,
        type: "Job",
        orgName: "Pure Storage Business Operations",
        description: "I worked as a Business Operation intern at Pure Storage in the summer of 2020. ",
    },
]


export default experiences;