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
                        Full stack perseverance with a depth of knowledge in MERN development, 
                        but personally in love with Node JS, a tint of UX design mainly with 
                        CSS frameworks just as Tailwind, Material UI or Bootstrap, but always 
                        Tailwind there for my rescue! Someone also quoted me to be a gyan guru
                        on Firebase.
                    </p>
                </div>
                <div>
                    <svg xmlns = "http://www.w3.org/2000/svg" class = "h-12 w-12" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                        <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h2 className = "mt-4 text-2xl font-title font-bold text-red-500">App Development</h2>
                    <p className = "mt-2 font-body text-lg text-justify text-gray-600">
                        A strong player for native android development with popular frameworks
                        such as Flutter and React Native. 
                    </p>
                </div>
                <div>
                    <svg xmlns = "http://www.w3.org/2000/svg" class = "h-12 w-12" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                        <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h2 className = "mt-4 text-2xl font-title font-bold text-red-500">Add-on's</h2>
                    <p className = "mt-2 font-body text-lg text-justify text-gray-600">
                        Walk along knowledge in handul of languages such as C++ and Python. 
                        Also love to create content for social media, designing using Adobe 
                        XD or Figma and lastly a photographer.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}