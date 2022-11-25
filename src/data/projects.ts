export interface Project {
    onGoing: boolean;
    projectName: string;
    website?: string;
    github?: string;
    description?: string;
}


const projectList: Project[] = [
    {
        onGoing: true,
        projectName: "Albert's portfolio",
        github: "https://github.com/albertNightingale/myweb"
    },
    {
        onGoing: true,
        projectName: "CAPS",
        github: "https://capstone-cs.eng.utah.edu/groups/caps/-/wikis/CAPS",
        website: "https://capstone-cs.eng.utah.edu/groups/caps/-/wikis/CAPS"
    }
]

export default projectList;