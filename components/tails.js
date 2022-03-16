import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function TailwindProjects() {
    return(
        <div className = "px-4 py-6 mx-auto w-full" id = "projects">
            <div className = "p-8 rounded bg-white shadow-xl">
                <span class = "inline-block ml-2 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">TAILWIND</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/gym.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple landing page for a website of a gym styled using basic HTML and Tailwind CSS.
                        <div className = "flex self-end">
                            <a href = "https://gym-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-tailwind/tree/main/Gym%20Landing%20Page" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">TAILWIND</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/extension.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple landing page for a website of a chromium extension styled using React framework and Tailwind CSS.
                        <div className = "flex self-end">
                            <a href = "https://extension-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-tailwind/tree/main/Chromium%20Extension%20Landing%20Page" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">TAILWIND</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/facebook.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple UI clone of Facebook's user home page styled using React framework and Tailwind CSS.
                        <div className = "flex self-end">
                            <a href = "https://facebook-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-tailwind/tree/main/Facebook%20Home%20UI%20Clone" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">TAILWIND</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/intercom.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple UI clone of Intercom's inbox page styled using Next framework and Tailwind CSS.
                        <div className = "flex self-end">
                            <a href = "https://intercom-dg.vercel.app" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-tailwind/tree/main/Intercom%20Inbox%20UI%20Clone" target = "_blank">
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