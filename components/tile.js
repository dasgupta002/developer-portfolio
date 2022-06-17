import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Tile({ project }) {
    const { stack, name, description, web, github } = project

    return (
        <div className = "bg-[#212023] w-full rounded-tl-md rounded-bl-md p-6 mb-4">
            <p className = "text-xs mb-4">{ stack }</p>
            <h2 className = "text-xl mb-2">{ name }</h2>
            <p className = "text-xs text-justify mb-4">{ description }</p>
            <div className = "flex flex-row items-center">
                { web !== '' && <a href = { web } target = "_blank">
                    <div className = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                        <FontAwesomeIcon className = "h-4 w-4" icon = { faGlobe } /> 
                    </div>
                  </a> 
                }
                <a href = { github } target = "_blank">
                    <div className = "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mt-3 mr-2">
                        <FontAwesomeIcon className = "h-4 w-4" icon = { faGithub } /> 
                    </div>
                </a>
            </div>
        </div>
    )
}