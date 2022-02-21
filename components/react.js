import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function ReactProjects() {
    return(
        <div className = "px-4 py-6 mx-auto w-full" id = "projects">
            <div className = "p-8 rounded bg-white shadow-xl">
                <span class = "inline-block ml-2 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">REACT JS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/codepen.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col w-full lg:w-1/2">
                        A simple clone of CodePen using React as web UI and CodeMirror npm package.
                        <div className = "flex self-end">
                            <a href = "https://codepen-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-react/tree/main/Codepen%20Web%20App" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">REACT JS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/netflix.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col w-full lg:w-1/2">
                        A simple clone of Netflix using React as web UI and a play of react hooks.
                        <div className = "flex self-end">
                            <a href = "https://netflix-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-react-advanced/tree/main/Netflix%20Web%20App" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">REACT JS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/twitter.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col w-full lg:w-1/2">
                        A simple UI clone of Twitter's home page using React as web UI and styled using basic CSS.
                        <div className = "flex self-end">
                            <a href = "https://twitter-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-react-advanced/tree/main/Twitter%20Web%20App" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">REACT JS</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/youtube.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col w-full lg:w-1/2">
                        A simple clone of Youtube using React as web UI, lint of react hooks, Bootstrap as layout framework
                        and Google's Youtube API as a means to fetch videos on demand.
                        <div className = "flex self-end">
                            <a href = "https://youtube-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-react-advanced/tree/main/Youtube%20Web%20App" target = "_blank">
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