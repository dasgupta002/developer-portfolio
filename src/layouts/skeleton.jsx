import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation'

export default function Skeleton() {
    return (
        <div className = 'md:w-1/2 md:mx-auto p-12'>
            <Navbar />
            <Outlet />
        </div>
    )
}