import { useLocation, NavLink } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className = 'flex flex-wrap justify-between font-extrabold'>
            { location.pathname !== '/' && <NavLink to = '/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>home</NavLink> }
            <NavLink to = '/about' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>about</NavLink>
            <NavLink to = 'https://www.linkedin.com/in/dasgupta002/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>hire me</NavLink>
            <NavLink to = '/projects' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>projects</NavLink>
            <NavLink to = '/posts' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>posts</NavLink>
            <NavLink to = 'https://www.linkedin.com/in/dasgupta002/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>talks</NavLink>
            <a href = './assets/resume.pdf' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>resume</a>
            <NavLink to = 'https://calcuttahighways.netlify.app/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>blog</NavLink>
        </nav>
    )
}
