import { FcFolder } from 'react-icons/fc'
import { FaGithubAlt } from 'react-icons/fa'
import { RxExternalLink } from 'react-icons/rx'

export default function Card({ props: { stack, title, gist, gitlink, livelink } }) { 
    return (
        <div className = 'bg-[#112240] text-[#ccd6f6] rounded-[5px] p-6 mb-6 md:mb-0'>
            <div  className = 'flex justify-between text-xl mb-6'>
                <FcFolder />
                <div className = 'flex gap-4'>
                    { gitlink !== '' && <a href = { gitlink }><FaGithubAlt /></a> }
                    { livelink !== '' && <a href = { livelink }><RxExternalLink /></a> }
                </div>
            </div>
            <h2 className = 'text-[1.4rem] mb-12'>{ title }</h2>
            <p className = 'text-justify text-xs mb-6'>{ gist }</p>
            <span className = 'text-xs'>{ stack }</span>
        </div>
    )
}