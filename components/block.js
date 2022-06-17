export default function Block({ experience }) {
    const { role, organisation, description, duration } = experience
    
    return (
        <div className = "bg-[#212023] rounded-md p-6">
            <div className = "text-[#5b5b5b] text-xs mb-24">
                <h3 className = "text-[#ededed] text-sm">{ organisation }</h3>
                <h4>{ role }</h4>
                <h4>{ duration }</h4>
            </div>
            <p className = "text-xl text-justify">{ description }</p>
        </div>
    )
}