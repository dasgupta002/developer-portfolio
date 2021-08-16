export default function Resume() {
    return(
        <div className = "px-4 py-6 mx-auto w-full">
          <div className = "p-8 rounded bg-gray-200 shadow-xl">
            <div className = "px-2 py-2 mx-auto flex items-center flex-col md:flex-row">
              <span className = "md:w-1/2 font-body text-2xl">For deeper insights into my vocation, have a glance at my resume.</span>  
              <button className = "w-full mt-4 md:mt-0 md:w-1/2 border-2 border-indigo-500 px-4 py-2 text-indigo-500 hover:text-white hover:bg-indigo-500 rounded">
                <a href = "/dg-resume.pdf" target = "_blank" className = "text-xl font-title">Download Now</a>
              </button>            
            </div>            
          </div> 
        </div>                            
    )
}