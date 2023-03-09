import { useLocation, Link } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className = 'flex flex-wrap justify-between font-extrabold'>
            { location.pathname !== '/' && <Link to = '/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>home</Link> }
            <Link to = '/about' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>about</Link>
            <Link to = 'https://www.linkedin.com/in/dasgupta002/' target = '_blank' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>hire me</Link>
            <Link to = '/projects' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>projects</Link>
            <Link to = 'https://medium.com/@devmoron' target = '_blank' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>posts</Link>
            <Link to = '/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>talks</Link>
            <Link to = './assets/resume.pdf' target = '_blank' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>resume</Link>
            <Link to = 'https://calcuttahighways.netlify.app/' target = '_blank' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>blog</Link>
            <Link to = '/' className = 'hover:bg-black hover:text-white rounded px-4 py-2'>shop</Link>
        </nav>
    )
}