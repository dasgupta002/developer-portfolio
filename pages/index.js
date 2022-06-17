import Sidebar from '../components/sidebar'
import Well from '../components/well'

export default function Home() {
  return (
    <div className = "bg-[#151515] flex flex-col lg:flex-row lg:h-screen font-grotesk">
      <Sidebar />
      <Well />
    </div>
  )
}