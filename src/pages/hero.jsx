export default function Hero() {
    return (
        <header className = 'text-[1rem] py-12'>
            <div className = 'flex flex-col md:flex-row items-center md:justify-between mb-12'>
                <div className = 'mb-12 md:mb-0'>
                    <h1 className = 'font-extrabold text-[3rem] mb-4'>
                        Subhrakanti <br />
                        Dasgupta
                    </h1>
                    <p className = 'text-justify'>
                        I'm a creative engineer who builds delightful web experiences. I have previously pulled strings 
                        on web platform, performance, user interactions and reusability. I also had a chance to work on
                        dataflow prototyping, web designing, user researching and web content.
                    </p>
                </div>
                <img src = './assets/avatar.png' alt = 'web_avatar' className = 'rounded-full h-44 w-44 md:ml-4' />
            </div>     
            <p className = 'text-justify'>
                I'm just on the cusp of my undergrad degree, where I studied computer science. I had a passion for all 
                sorts of creative interactions with web components and web standard with the guts of exploring ethereum. 
                I did loads of side projects, even published a <a href = '/' className = 'font-bold text-[#f83735]'>research 
                paper</a>. Most of my personal code is on <a href = 'https://github.com/dasgupta002' className = 'font-bold text-[#f83735]'>
                GitHub</a>. I also love literature and <a href = 'https://instagram.com/lensseanix' className = 'font-bold text-[#f83735]'>
                photography</a> as a side hustle. Even did a exhibition and a pulication! 
                <br />
                I am available for freelance work or as a full time engineer in web esospace. In order to get in touch 
                with me, have a knock at my mailbox, <a href = 'mailto:subhrakanti.dasgupta@gmail.com' className = 'font-bold text-[#f83735]'>
                here</a>!
            </p>       
        </header>
    )
}
