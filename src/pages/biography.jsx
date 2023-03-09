export default function Biography() {
    return (
       <div className = 'flex flex-col gap-12 text-[1rem] py-12'>
            <p className = 'text-justify'>
                I have a term, not from word banks but from nowhere, I call myself to be a enthusiastic learner but never a fast
                one. I enjoy creating things that live on the internet and started by learning bootstrap. Doging lectures, I was 
                always around the GDG community and a key member of the flutter core. Never a lecture geek, yet passionate about 
                any piece of software. Any kind of content creation and designing challenges were icing to weekends. 
                <b className = 'bg-yellow-300 text-[1.2rem]'>Thrives on tech, wants the world to be eaten up by tech, but not by people.</b>
                <br />
                In 2020 I did a month fellowship with the One Percent, writing articles on programming paradigms, one of my firsts.
                Forward to 2021, I worked on react, my first love, and firbase as frontend intern at the Tech Exordium. I also went
                into open source communities. Thence I worked with a talentful team at Tutor Here as a backend intern for over six 
                months, far into 2022. From fun at meetings to presentations, life grew older from startups to media to corporations. 
                <b className = 'bg-yellow-300 text-[1.2rem]'>Anddd, greatly influenced by peeps who are always bingo on what they do.</b>
                <br />
                Before that, in the prehistoric times, I also worked on wordpress and python. The designing side of mine was mainly 
                adided by freelancing and medium. My final year thesis was on ethereum, so had a switch there as well into NFT crazy
                mode.
                <br /> 
                Non-tech averts of mine are crime thrillers and day dreaming. Lately being a bookworm and hodophile. 
            </p>
            <div className = 'flex flex-col gap-4 text-white text-[0.7rem]'>
                <div className = 'flex gap-2'>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>react</span>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>firebase</span>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>express</span>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>authentication</span>
                </div>
                <div className = 'flex gap-2'>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>css</span>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>prototyping</span>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>android</span>
                    <span className = 'bg-[#2b4555] rounded-md p-2'>content</span>
                </div>
            </div>
            <p className = 'text-justify'>
                <b className = 'text-[1.4rem]'>Do you want to have me onboard?</b>
                <br />
                I am available for freelance work or as a full time engineer in web esospace. My areas of expertise are web 
                platform, designing, research, consulting, android and content generation. I care deeply about users, 
                performance, accessibility and shipping something quintessential. For furthur leads, check out moreways in 
                which I can help <a href = '/resume' className = 'font-bold text-[#f83735]'>here</a>.
            </p>
            <p className = 'text-justify'>
                <b className = 'text-[1.4rem]'>Wanna just say hi?</b>
                <br />
                My social media is rather hell of choice, but one can find me on 
                <a href = '/https://twitter.com/dasgupta002' className = 'font-bold text-[#f83735]'> Twitter</a>. 
                If really want a coffee and some ideathon, have a knock at my mailbox,
                <a href = 'mailto:subhrakanti.dasgupta@gmail.com' className = 'font-bold text-[#f83735]'>here</a>!
            </p>
       </div> 
    )
}