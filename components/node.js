import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function NodeProjects() {
    return(
        <div className = "px-4 py-6 mx-auto w-full" id = "projects">
            <div className = "p-8 rounded bg-white shadow-xl">
                <span class = "inline-block ml-2 py-2 px-4 rounded bg-indigo-100 text-indigo-500 text-xs font-medium">EXPRESS JS AND MONGODB</span>
                <div className = "px-2 py-2 font-body font-bold text-lg mx-auto flex flex-col lg:flex-row">
                    <img src = "/user.png" className = "bg-gray-200 rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <div className = "text-yellow-400 text-justify p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col flex-grow">
                        A simple user management system with basic CRUD operations built with Express JS and MongoDB as a data store.
                        <div className = "flex self-end">
                            <a href = "https://user-dg.herokuapp.com/" target = "_blank">
                                <div class = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                                    <FontAwesomeIcon className = "h-6 w-6" icon = { faGlobe } /> 
                                </div>
                            </a>
                            <a href = "https://github.com/dasgupta002/web-dev-mongodb/tree/main/MongoDB%20User%20Management%20CRUD%20Web%20App" target = "_blank">
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