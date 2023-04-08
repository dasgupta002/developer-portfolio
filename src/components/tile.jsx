import { format } from 'date-fns'

export default function Tile({ post }) {
    return (
        <div className = 'flex items-center justify-between border-black-500 border-b w-full pb-2'>
            <a href = { `/posts/${post.slug}` } className = 'text-lg'>{ post.title }</a>
            <div className = 'flex flex-col items-end'>
                <b className = 'text-xs'>{ format(new Date(post.created_at), 'MMMM d, yyyy') }</b>
                <hr className = 'bg-[#f83735] h-2 w-[2.5rem]' />
            </div>
        </div>
    )
}