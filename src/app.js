import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navigation'
import Hero from './pages/hero'
import Biography from './pages/biography'
import Featured from './pages/featured'

export default function App() {
  return (
    <div className = 'md:w-1/2 md:mx-auto p-12'>
      <Navbar />
      <Routes>
        <Route path = '/' element = { <Hero /> } />
        <Route path = '/about' element = { <Biography /> } />
        <Route path = '/projects' element = { <Featured /> } />
      </Routes>
    </div>
  )
}