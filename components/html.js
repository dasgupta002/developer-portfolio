import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function HTMLProjects() {
    return(
        <div className = "px-4 py-6 mx-auto w-full" id = "projects">
            <div className = "p-8 rounded bg-white shadow-xl">
                <span class = "inline-block ml-2 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">HTML AND CSS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/pluralsight.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col w-full lg:w-1/2">
                        A simple UI clone of Pluralsight login page styled using basic HTML and pure CSS.
                        <div className = "flex self-end">
                            <a href = "https://pluralsight-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-html-css/tree/master/Pluralsight%20Login%20UI%20Clone" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>  
    )
}