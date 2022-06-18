export default function Card({ blog }) {
    const { title, gist, link } = blog

    return (
        <div className = "bg-[#212023] flex flex-col lg:flex-row items-end lg:items-center justify-between w-full rounded-tl-md rounded-bl-md p-4 mb-4">
            <div className = "lg:w-3/4 mb-6">
                <h2 className = "text-2xl mb-4">{ title }</h2>
                <p className = "text-[#5b5b5b] text-xs text-justify">{ gist }</p>
            </div>
            <button className = "bg-[#a855f7] rounded-md p-2">
                <a href = { link } target = "_blank">Learn More</a>
            </button>
        </div>
    )
}