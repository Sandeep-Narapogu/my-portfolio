import windowsDesktop from '../assets/portfolio/windows/portfolio_desktop.png'
const ProjectsData = () => {
    let data = [
        {
            show: true,
            component: "Portfolio",
            stack: ["React", "Context API", "CSS", "Tailwind"],
            laptopImage: [windowsDesktop],
            config: {
                isLive: true,
                hasGithub: true,
                liveUrl: "Sandeepnarapogu.com",
                githubUrl: "https://github.com/Sandeep-Narapogu"
            },
            projectInfo: [
                {
                    desc: "Create a captivating portfolio website with a Windows 11 theme to showcase your work professionally. Utilize the sleek design elements, vibrant colors, and clean typography to highlight projects and skills effectively. Leverage interactive widgets and smooth transitions to provide an immersive and engaging browsing experience for visitors."
                }
            ],
            projectDesc: [
                {
                    desc: "Create a portfolio website using React and Tailwind"
                }
            ]
        }
    ]
    return data
}

export default ProjectsData
