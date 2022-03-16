import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function JSProjects() {
    return(
        <div className = "px-4 py-6 mx-auto w-full" id = "projects">
            <div className = "p-8 rounded bg-white shadow-xl">
                <span class = "inline-block ml-2 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">Vanilla JS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/calculator.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple numerical calculator styled using pure CSS and made functional by vanilla JavaScript.
                        <div className = "flex self-end">
                            <a href = "https://calculator-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-javascript/tree/master/Simple%20Calulator%20Web%20App" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">Vanilla JS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/password.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple random password generator styled using pure CSS and made functional by vanilla JavaScript.
                        <div className = "flex self-end">
                            <a href = "https://password-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-javascript/tree/master/Random%20Password%20Generator%20Web%20App" target = "_blank">
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