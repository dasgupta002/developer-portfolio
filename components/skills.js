export default function Skills() {
  return (
    <div className = "px-4 py-6 mx-auto w-full">
        <div className = "p-8 rounded bg-white shadow-xl">
            <div className = "grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                    <svg xmlns = "http://www.w3.org/2000/svg" class = "h-12 w-12" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                        <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h2 className = "mt-4 text-2xl font-title font-bold text-red-500">Web Development</h2>
                    <p className = "mt-2 font-body text-lg text-justify text-gray-600">
                        Full stack perseverance with a depth of knoledge in MERN development, 
                        with dedicated backend engineering with PHP, a tint of UX design 
                        mainly with CSS frameworks just as Tailwind, Material UI or Bootstrap
                        to name a few and also authentication schema with providers such as 
                        Firebase.
                    </p>
                </div>
                <div>
                    <svg xmlns = "http://www.w3.org/2000/svg" class = "h-12 w-12" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                        <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h2 className = "mt-4 text-2xl font-title font-bold text-red-500">App Development</h2>
                    <p className = "mt-2 font-body text-lg text-justify text-gray-600">
                        A strong player for native android development with popular frameworks
                        such as Flutter and React Native. Adept in designing as well publication 
                        on app store. A little bit of insights as well for authentication providers
                        such as Firebase for android.
                    </p>
                </div>
                <div>
                    <svg xmlns = "http://www.w3.org/2000/svg" class = "h-12 w-12" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                        <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h2 className = "mt-4 text-2xl font-title font-bold text-red-500">Random</h2>
                    <p className = "mt-2 font-body text-lg text-justify text-gray-600">
                        Not a stiff competetive coder, nonetheless well versed in handul of
                        languages such as C++ as well as Python. Learning round the run time
                        errors still, hoping to find a score for me yet to haul.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}