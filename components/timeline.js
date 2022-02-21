export default function Timeline() {
  return (
    <div className = "px-4 py-6 mx-auto w-full">
      <div className = "p-8 rounded bg-white shadow-xl">
        <div className = "flex relative pb-12">
          <div className = "h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className = "h-full w-1 bg-red-300 pointer-events-none"></div>
          </div>
          <div className = "flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-5 h-5" viewBox = "0 0 24 24">
              <path d = "M12 14l9-5-9-5-9 5 9 5z" />
              <path d = "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div className = "flex-grow pl-4">
            <h2 className = "font-title text-xl font-bold text-yellow-400 mb-1">Education</h2>
            <p className = "leading-relaxed font-body text-lg text-justify">
              Started studying at Netaji Subhash Engineering College in 2019 for a degree in bachelor of technology in computer science.
            </p>
          </div>
        </div>
        <div className = "flex relative pb-12">
          <div className = "h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className = "h-full w-1 bg-red-300 pointer-events-none"></div>
          </div>
          <div className = "flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-5 h-5" viewBox = "0 0 24 24">
              <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div className = "flex-grow pl-4">
            <h2 className = "font-title text-xl font-bold text-yellow-400 mb-1">Freelancing</h2>
            <p className = "leading-relaxed font-body text-lg text-justify">
              Worked as content developer at One Percent, QnA.org and CtrlAltHeal as a part timer.
            </p>
          </div>
        </div>
        <div className = "flex relative pb-12">
          <div className = "h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className = "h-full w-1 bg-red-300 pointer-events-none"></div>
          </div>
          <div className = "flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-5 h-5" viewBox = "0 0 24 24">
              <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className = "flex-grow pl-4">
            <h2 className = "font-title text-xl font-bold text-yellow-400 mb-1">Trainings</h2>
            <p className = "leading-relaxed font-body text-lg text-justify">
              Completed value added trainings for internet of things and machine learning.
            </p>
          </div>
        </div>
        <div className = "flex relative pb-12">
          <div className = "h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className = "h-full w-1 bg-red-300 pointer-events-none"></div>
          </div>
          <div className = "flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" stroke = "currentColor" stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" className = "w-5 h-5" viewBox = "0 0 24 24">
              <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <div className = "flex-grow pl-4">
            <h2 className = "font-title text-xl font-bold text-yellow-400 mb-1">Internships</h2>
            <p className = "leading-relaxed font-body text-lg text-justify">
              Previous working experience as an backend engineer for node and PHP development at Tech Exordium and Tutor Here as intern.
            </p>
          </div>
        </div>
      </div>
    </div>    
  )
}