import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const link = "https://calcuttahighways.netlify.app"

export default function SideBar() {
    return (
        <div className = "flex flex-col lg:w-1/2 top-0 lg:sticky gap-12 lg:gap-16 items-start text-white px-8 py-12 lg:p-24">
            <div>
                <h1 className = "text-4xl lg:text-5xl tracking-wider">Hello, I'm</h1>
                <h1 className = "text-4xl lg:text-5xl tracking-wide">Subhrakanti Dasgupta</h1>
            </div>
            <p className = "text-[#5b5b5b] text-sm text-justify">
                Enthusiastic learner and passionate software developer with a belonging for building web and native applications. Currently an undergrad and also creative about any kind of content creation and designing challenges. Thrives on tech, wants the world to be eaten up by tech, but not by people. Loves music, literature and photography. Avid fan of crime thrillers and a dreamer. Lately throwing bits and strings at <a href = { link } className = "text-[#ededed] underline">calcuttahighways.in</a> besides being a bookworm and hodophile. Lastly, greatly influenced by peeps who are always bingo on what they do.
            </p>
            <div className = "flex flex-col gap-6 text-[#ededed] text-xs">
                <div className = "flex flex-row gap-4 items-center">
                    <h6>01</h6>
                    <hr style = {{ color: '#ededed', width: '4rem' }} />
                    <a href = "#projects">PROJECTS</a>
                </div>
                <div className = "flex flex-row gap-4 items-center">
                    <h6>02</h6>
                    <hr style = {{ color: '#ededed', width: '4rem' }} />
                    <a href = "#experience">EXPERIENCE</a>
                </div>
                <div className = "flex flex-row gap-4 items-center">
                    <h6>03</h6>
                    <hr style = {{ color: '#ededed', width: '4rem' }} />
                    <a href = "#blogs">BLOGS</a>
                </div>
                <div className = "flex flex-row gap-4 items-center">
                    <h6>04</h6>
                    <hr style = {{ color: '#ededed', width: '4rem' }} />
                    <a href = "#talks">TALKS</a>
                </div>
            </div>
            <div className = "flex flex-row gap-6 lg:gap-16 items-center text-[#ededed] text-xs">                     
                <a href = "https://www.linkedin.com/in/dasgupta002/" target = "_blank" className = "flex flex-row items-center mr-2">
                    <FontAwesomeIcon className = "h-6 w-6" icon = { faLinkedin } />     
                    <subtitle className = "mx-2">LinkedIn</subtitle>                       
                </a>                        
                <a href = "https://github.com/dasgupta002" target = "_blank" className = "flex flex-row items-center">
                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithubSquare } />     
                    <subtitle className = "mx-2">GitHub</subtitle>                       
                </a> 
                <a href = "/resume-skdg.pdf" target = "_blank" className = "flex flex-row items-center">
                    <FontAwesomeIcon className = "h-6 w-6" icon = { faFileDownload } />     
                    <subtitle className = "mx-2">Resume</subtitle>                       
                </a> 
            </div>
        </div>          
    )
}