import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const formRef = useRef()

    const mail = async (event) =>  {
        event.preventDefault()
        await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
        window.scrollTo(0, 0)
        formRef.current.reset()
    }

    return (
        <div className = "bg-[#212023] rounded-tl-md rounded-bl-md p-6 mb-12 lg:mb-4">
            <form ref = { formRef } onSubmit = { () => mail(event) } className = "flex flex-col gap-4">
                <label className = "block w-full">Name</label>
                <input type = "text" name = "name" className = "block h-8 w-full text-black outline-none rounded-md px-2" />
                <label className = "block w-full">Mailing Address</label>
                <input type = "email" name = "email" className = "block h-8 w-full text-black outline-none rounded-md px-2" />
                <label className = "block w-full">Anything to tell?</label>
                <textarea name = "message" className = "block h-24 w-full text-black outline-none rounded-md px-2 py-1 mb-4" />
                <button type = "submit" className = "bg-[#a855f7] block rounded-md p-2">Ask Query</button>
            </form>
        </div>
    )
}