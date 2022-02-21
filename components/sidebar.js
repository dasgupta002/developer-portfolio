import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'

export default function SideBar() {
    return (
        <div className = "flex flex-col overflow-y-auto w-full md:w-96 top-0 md:sticky py-8 bg-gray-800">
            <div className = "flex flex-col items-center mt-6 mx-2">
                <img className = "object-cover w-36 h-36 mx-2 rounded-full" src = "./my-avatar.jpg" />
                <h4 className = "mx-2 mt-4 font-bold font-title text-2xl text-gray-200">Subhrakanti Dasgupta</h4>
            </div>
        
            <div className = "flex flex-col font-nav">
                <nav className = "flex flex-col items-center mt-6 mx-2">                       
                    <a href = "#about" className = "flex px-4 py-1 text-gray-200">
                        <svg xmlns = "http://www.w3.org/2000/svg" className = "h-6 w-6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                            <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className = "mx-4 font-medium">About</span>
                    </a>                        
                    <a className = "flex px-4 py-1 text-gray-200" href = "#projects">
                        <svg xmlns = "http://www.w3.org/2000/svg" className = "h-6 w-6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                            <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <span className = "mx-4 font-medium">Projects</span>
                    </a>                        
                    <a className = "flex px-4 py-1 text-gray-200" href = "">
                        <svg xmlns = "http://www.w3.org/2000/svg" className = "h-6 w-6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                            <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        <span className = "mx-4 font-medium">Blog</span>
                    </a>                        
                    <a href = "https://www.facebook.com/subhrakanti.dasgupta.9" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faFacebookSquare } />     
                        <span className = "mx-4 font-medium">Add</span>                       
                    </a>                        
                    <a href = "https://twitter.com/dasgupta002" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faTwitterSquare } />     
                        <span className = "mx-4 font-medium">Grow</span>                       
                    </a>                        
                    <a href = "https://www.instagram.com/dasgupta002/" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faInstagramSquare } />     
                        <span className = "mx-4 font-medium">Follow</span>                       
                    </a>                        
                    <a href = "https://www.linkedin.com/in/dasgupta002/" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faLinkedin } />     
                        <span className = "mx-4 font-medium">Connect</span>                       
                    </a>                        
                    <a href = "https://github.com/dasgupta002" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faGithubSquare } />     
                        <span className = "mx-4 font-medium">Contribute</span>                       
                    </a>                        
                    <a href = "https://calcuttahighways.blogspot.com/" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faBlogger } />     
                        <span className = "mx-4 font-medium">Engage</span>                       
                    </a>  
                    <a href = "https://ashadeofmythoughts.wordpress.com/" target = "_blank" className = "flex px-4 py-1 text-gray-200">
                        <FontAwesomeIcon className = "h-6 w-6" icon = { faWordpress } />     
                        <span className = "mx-4 font-medium">Share</span>                       
                    </a>  
                    <a className = "flex mt-6 px-4 py-1 text-gray-200">
                        <span className = "mx-2 font-semibold">Built with 💖 and 🍺.</span>
                    </a>                     
                </nav>
            </div>
        </div>          
    )
}