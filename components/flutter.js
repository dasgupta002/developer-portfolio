import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function FlutterProjects() {
    return(
        <div className = "px-4 py-6 mx-auto w-full" id = "projects">
            <div className = "p-8 rounded bg-white shadow-xl">
                <span class = "inline-block ml-2 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">FLUTTER</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/bmi.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full h-96 lg:w-1/3 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple cross-platform BMI calculator app built and designed using Flutter.
                        <div className = "flex self-end">
                            <a href = "https://github.com/dasgupta002/app-dev-flutter/tree/main/BMI%20Calculator%20Native%20App" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGithub } /> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span class = "inline-block ml-2 mt-6 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">FLUTTER</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/covid.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full h-96 lg:w-1/3 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple cross-platform COVID tracker app, with dark mode and built-in custom search, built and designed using FLutter.
                        <div className = "flex self-end">
                            <a href = "https://github.com/dasgupta002/app-dev-flutter/tree/main/COVID%20Tracker%20Native%20App" target = "_blank">
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