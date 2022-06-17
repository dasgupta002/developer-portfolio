import Tile from './tile'
import Block from './block'
import { projects } from '../data/projects'
import { experiences } from '../data/experiences.js'

export default function Well() {
    return (
        <div className = "flex-1 overflow-y-auto text-[#ededed] lg:mt-12 px-6 lg:p-0">
            <div id = "projects">
                {
                    projects.map((project) => <Tile key = { project.id } project = { project } />)
                }
            </div>

            <div className = "flex flex-col gap-4 lg:grid grid-cols-2 lg:gap-2 mb-12 lg:mb-4" id = "experience">
                {
                    experiences.map((experience) => <Block key = { experience.id } experience = { experience } />)
                }
            </div>
        </div>
    )
}