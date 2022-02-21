import Sidebar from '../components/sidebar'
import About from '../components/about'
import Resume from '../components/resume'
import Skills from '../components/skills'
import Info from '../components/info'
import Timeline from '../components/timeline'
import HTMLProjects from '../components/html'
import JSProjects from '../components/javascript'
import ReactProjects from '../components/react'
import TailwindProjects from '../components/tails'
import Contact from '../components/contact'
import Copyright from '../components/copyright'

export default function Home() {
  return (
    <div className = "bg-purple-200 flex flex-col md:h-screen md:flex-row">
      <Sidebar />
      <div className = "flex-1 flex overflow-hidden">
        <div className = "flex-1 overflow-y-auto">
          <About />
          <Skills />
          <Resume />
          <Info />
          <Timeline />
          <HTMLProjects />
          <JSProjects />
          <ReactProjects/>
          <TailwindProjects/>
          <Contact />
          <Copyright />
        </div>
      </div>  
    </div>
  )
}
