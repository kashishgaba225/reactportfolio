import React from 'react'
import My from '../assets/MyMan.jpg'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div >
        <h1 className='my-20 text-center text-4xl bg-gradient-to-r from-black via-slate-500 to-gray-500 text-transparent bg-clip-text'>About Me</h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>

                
            <motion.img
            whileInView={{opacity:1,x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration:0.5}}
             className='rounded-md md:h[400px] md:w-[360px] h-[360px] w-[320px]' src={My} alt="Me" />
            </div>

            </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <motion.p
                whileInView={{opacity:1, x:0}}
                initial={{x:100, opacity:0}}
                transition={{duration:0.5}}
                 className='my-2 max-w-xl py-6 pt-20 px-5'>I am fully passionated and skilled with fiber laser service engineer with extensive experience in maintaining, troubleshooting, and optimizing cutting-edge fiber laser systems. Proficient in ensuring the seamless operation of laser technologies through precise diagnostics, effective problem-solving, and meticulous maintenance practices. Known for delivering high-quality technical solutions that maximize efficiency, performance, and longevity of laser systems. Dedicated to innovation, client satisfaction, and continuous learning to stay ahead in the dynamic field of laser technology.</motion.p>
            </div>
        </div>

        </div>
    </div>
  )
}
