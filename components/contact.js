export default function Contact() {
    return (
        <div className = "px-4 py-6 mx-auto w-full">
            <div className = "p-8 rounded bg-green-300 shadow-xl">
                <div className = "px-2 py-2 font-title mx-auto flex flex-col lg:flex-row">
                    <img src = "/doodle.png" className = "bg-white rounded-lg mb-4 lg:mr-2 lg:mb-0 p-4 w-full lg:w-1/2 shadow-lg" />
                    <form method = "POST" name = "contact" data-netlify = "true" className = "bg-white rounded-lg p-4 lg:ml-2 flex flex-col w-full lg:w-1/2 shadow-lg">
                        <div className = "relative mt-4 mb-4">
                            <label for = "email" className = "leading-7 text-lg text-gray-600">Email</label>
                            <input type = "email" name = "email" className = "w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className = "relative mt-4 mb-4">
                            <label for = "message" className = "leading-7 text-lg text-gray-600">Message</label>
                            <textarea name = "message" className = "w-full bg-white rounded border border-gray-300 h-32 outline-none text-gray-700 py-1 px-3 resize-none leading-6" />
                        </div>
                        <input type = "hidden" name = "form-name" value = "contact" />
                        <button type = "submit" className = "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded text-xl">Share Opinion</button>
                    </form>
                </div>
            </div>
        </div>  
    )
}    
