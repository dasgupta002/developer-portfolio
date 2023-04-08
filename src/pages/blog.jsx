import Tile from '../components/tile'
import { useAPI } from '../hooks/object'

export default function Blog() {
    const posts = useAPI()

    return (
        <div className = 'flex flex-col items-center gap-6 py-12'>
            <b className = 'text-[1.5rem] mb-6'>/shelf</b>
            { posts.map((post, index) => <Tile key = { index } post = { post } />) }
        </div>
    )
}