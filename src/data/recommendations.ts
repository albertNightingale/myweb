

export interface Recommendation {
    recommender: string;
    recommendation: string;
    role: string;
    company: string;
}


const recommendations: Recommendation[] = [
    {
        recommender: "Praharsh Parashara",
        recommendation: `It was a pleasure to mentor Albert during his Internship at Amazon in the summer of 2022. Albert was able to do a deep dive, and figure out the steps that were needed to solve a given problem and achieve the desired results.He prioritized his tasks according to the project timeline and showed curiosity to learn.He was open to feedback and incorporated that into his work. In the end, Albert learned about the react - redux framework from scratch and created a working UI that achieved the desired goal of the project, while maintaining the high bar that amazon has for any piece of code that's written. It was great to work with him on this project and I wish him all the best in his future endeavors.`,
        company: "Amazon Alexa",
        role: "Software Development Engineer",
    },
    {
        recommender: "Shivakant Sharma",
        recommendation: `Albert worked with our team as Summer intern in 2022. He quickly developed working knowledge of Amazon internal tools, software development processes, and newly developed Build System. He developed a debugging tool/UI for our new build system that will help oncall engineers to root-cause issues in distributed build system with minimal efforts. He has shown great ability to dive-deep, learn and unblock himself when facing obstacles. Always looking for ways to improve and incorporating feedback shows his determination to become better at what he does. It was great to have him on the team.`,
        company: "Amazon Alexa",
        role: "Software Development Manager",
    },
    {
        recommender: "Mia Sheff",
        recommendation: `I met Albert when he was a high school senior doing a concurrent enrollment program at De Anza College. He was my programming assignment partner for CIS 22C (Data Structures in Java). Throughout our assignments and the final project, he demonstrated impressive knowledge in computer science and had strong leadership skills. While simultaneously coding the most difficult part of the project, Albert stepped up to lead the team and inspired his colleagues to produce top-quality work. 
        Albert impressed me, so I asked if he would be interested in interning as a software developer on my team at Pure Storage. Although his assigned projects were more challenging and vastly different from school, Albert was able to quickly adapt and excel. I saw Albert's true strength as his determination to solve problems no matter the obstacle. He was always very focused and dedicated to his work; completing all of his projects on time, creatively solving issues along the way, and thoughtfully commenting on his code to assist any future developers. He did great work for our team, and I would undoubtedly hire him again.`,
        company: "Pure Storage Operation",
        role: "Cost Operations Manager",
    }
]

export default recommendations;