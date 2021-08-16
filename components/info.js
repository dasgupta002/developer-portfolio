export default function Contact() {
    return (
        <div className = "px-4 py-6 mx-auto w-full">
            <div className = "p-8 rounded bg-green-300 shadow-xl">
                <div className = "px-2 py-2 mx-auto flex flex-col lg:flex-row">
                    <div className = "bg-white rounded-lg p-4 mb-4 lg:mb-0 lg:mr-2 flex flex-col w-full lg:w-1/2 shadow-lg">
                        <div className = "flex justify-end">
                            <a className = "px-3 py-1 text-sm font-bold font-title text-gray-100 bg-gray-600 rounded">Open to connect and contribute actively</a>
                        </div>
                        <div className = "mt-10 flex flex-col">
                            <a className = "text-2xl font-bold flex font-title text-gray-700">
                                <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox = "0 0 24 24">
                                    <path d = "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className = "ml-3">Location</span>
                            </a>
                            <p className = "ml-12 text-xl font-body text-gray-600">Calcutta, West Bengal</p>
                        </div>
                        <div className = "mt-6 flex flex-col">
                            <a className = "text-2xl font-bold flex font-title text-gray-700">
                                <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox = "0 0 24 24">
                                    <path d = "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className = "ml-3">Contact</span>
                            </a>
                            <p className = "ml-12 text-xl font-body text-gray-600">+91 9674030231</p>
                        </div>
                        <div className = "mt-6 flex flex-col">
                            <a className = "text-2xl font-bold flex font-title text-gray-700">
                                <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox = "0 0 24 24">
                                    <path d = "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                </svg>
                                <span className = "ml-3">Mailbox</span>
                            </a>
                            <p className = "ml-12 text-xl font-body text-gray-600">subhrakanti.dasgupta@gmail.com</p>
                        </div>
                    </div>
                    <img src = "/art.png" className = "bg-white rounded-lg lg:ml-2 p-4 w-full lg:w-1/2 shadow-lg" />
                </div>
            </div>
        </div>
    )
}                