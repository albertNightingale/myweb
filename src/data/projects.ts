export interface Project {
    onGoing: boolean;
    projectName: string;
    startingDate: string;
    website?: string;
    github?: string;
    description?: string;
}


const projectList: Project[] = [
    {
        onGoing: true,
        startingDate: "October 2022",
        projectName: "Albert's portfolio",
        github: "https://github.com/albertNightingale/myweb"
    },
    {
        onGoing: true,
        projectName: "CAPS",
        startingDate: "Sept 2022",
        github: "https://capstone-cs.eng.utah.edu/groups/caps/-/wikis/CAPS",
        website: "https://capstone-cs.eng.utah.edu/groups/caps/-/wikis/CAPS"
    }
]

export default projectList;