import React from 'react'
import {motion} from 'framer-motion'

export default function Contact() {
    const CONTACT={
        address:"#144 Village Dabri Karnal 132001 (HRY)",
        phoneNo:"8222853331",
        email:"palh071@gmail.com"
    };
  return (
    <motion.div
    whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
     className='border-b border-neutral-950'>
        <h1 className='my-10 text-4xl text-center'>Get in Touch</h1>

        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="mailto:palh071@gmail.com" className='my-4 border-b '>{CONTACT.email}</a>
        </div>

    </motion.div>
  )
}
