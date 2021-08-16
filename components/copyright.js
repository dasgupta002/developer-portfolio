export default function Copyright() {
    const year = new Date().getFullYear()

    return(
        <div className = "px-4 py-6 mx-auto w-full">
            <div className = "p-8 rounded bg-gray-200 shadow-xl">
                <div className = "px-2 py-2 mx-auto flex items-center flex-col md:flex-row">
                    <a className = "flex font-body items-center justify-start text-gray-900">
                        <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox = "0 0 24 24">
                            <path d = "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className = "ml-3 text-2xl">Developer Portfolio</span>
                    </a>
                    <p className = "text-sm text-gray-500 ml-6 mt-4 md:mt-0">© { year }, all rights reserved — 
                        <a className = "text-gray-600 ml-1 text-xl font-body">Subhrakanti Dasgupta</a>
                    </p>
                </div>
            </div>
        </div> 
    )
}