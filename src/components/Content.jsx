import React from 'react'
import Laser from '../assets/Laser.jpeg'
import {motion} from 'framer-motion'

export default function Content() {
  const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5 , delay:delay}
    }
  })
  return (
    <div className='pb-4 lg:mb-35'>
      <div className='flex flex-wrap justify-between items-center'>

        <div className='px-15 w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
            variants={container(0)}
            initial='hidden'
            animate='visible'
            className='logo flex  text-6xl pb-16 font-thin tracking-tight lg:text-8xl lg:mt-16'>Harshad</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial='hidden'
            animate='visible'
            className='text-4xl pb-2 bg-gradient-to-r from-pink-700 via-gray-600 to-purple-600 text-transparent bg-clip-text tracking-tight'>Fiber Laser Service Engineer</motion.span>

            <motion.p
            variants={container(1)}
            initial='hidden'
            animate='visible'
             className='my-2 max-w-xl py-6 '>Trained in Fiber Laser Service Engineering with expertise in the installation, maintenance, and troubleshooting of advanced fiber laser systems for industrial applications. Proficient in optimizing laser performance, ensuring beam quality, and integrating systems with CNC machines and robotics. Skilled in diagnosing complex issues, adhering to safety protocols, and delivering exceptional technical support to maximize efficiency and minimize downtime. Dedicated to staying updated on the latest advancements in fiber laser technology to provide innovative solutions.</motion.p>
          </div>

        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className='rounded-md md:h-[350px] md:w-[360px] h-[360px] w-[320px]' src={Laser} alt="LaserMachine" />
          </div>
        </div>

      </div>
    </div>
  )
}
