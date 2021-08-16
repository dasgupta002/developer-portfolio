export default function About() {
    return (
        <div className = "px-4 py-6 mx-auto w-full">
         <div className = "p-8 rounded bg-white shadow-xl">
          <div className = "flex flex-col md:flex-row" id = "about">
            <div className = "mb-6 md:pr-12">
              <h2 className = "text-4xl font-bold tracking-tight text-gray-900">
                Enthusiastic<br />
                Optimistic<br />
                <span className = "inline-block text-purple-400">Lazy</span>
                <br />
                Impartial<br />
                <span className = "inline-block text-purple-400">Zealous</span>
              </h2>
            </div>
            <div className = "w-full">
              <p className = "mb-4 font-body text-xl text-justify text-gray-700">
                An aspiring undergraduate, based out of Calcutta, currently pursuing my bachelor degree in computer science. Thrives on tech, wants the world
                to be eaten up by tech, but not by people. Loves music, literature and photography. Avid fan of crime thrillers and a dreamer out on the street.
                Sound on skills one needs to be in the tide of time, and garnishes on writing blogs and quotes thrown out of mind at random. Greatly influenced 
                by peeps who are always bingo on what they do. Looking for wonders out in destiny, yet a bit late to rise on a fresh morning!  
              </p>
            </div>
          </div>
         </div>
        </div>      
    )
}