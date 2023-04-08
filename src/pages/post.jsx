import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'
import { useAPI } from '../hooks/object'

export default function Post() {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const post = useAPI(slug)[0]

    return (
        post && <div className = 'flex flex-col items-center'>
            <h1 className = 'bg-yellow-300 text-[1.2rem] w-fit my-12'>{ post.title }</h1>
            <p className = 'text-[1rem]'>{ parse(post.content) }</p>
        </div>
    )
}