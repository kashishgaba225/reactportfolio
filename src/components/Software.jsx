import React from 'react'
import Art from '../assets/Artt.png'
import Auto from '../assets/Auto.png'
import Cyp from '../assets/Cypcut.png'
import Rd from '../assets/Rd.png'
import Ym from '../assets/Ym.png'
import {animate, motion} from 'framer-motion'


export default function Software() {
  const iconVariants = (duration)=>(
    {
      initial:{y:10},
      animate:{
        y:[10,-10],
        transition:{
          duration:duration,
          ease:"linear",
          repeat:Infinity,
          repeatType:"reverse",
        },
      },
    }
  )
  return (
    <div className='pb-20'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
         className='my-20 flex text-4xl items-center justify-center'> Software Proficiency</motion.h1>

        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap item-center justify-center gap-4 '>
            
            <motion.img
            variants={iconVariants(1.5)}
            initial='initial'
            animate='animate'
             className='rounded-2xl border-4 h-[150px] w-[150px]' src={Art} alt="Art" />
            <motion.img 
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 h-[150px] w-[150px]' src={Cyp} alt="cyp" />
            <motion.img 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 h-[150px] w-[150px]' src={Auto} alt="auto" />
            <motion.img
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
             className='rounded-2xl border-4 h-[150px] w-[150px]' src={Rd} alt="rd" />
            <motion.img 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 h-[150px] w-[150px]' src={Ym} alt="ym" />
        </motion.div>  
    </div>
  )
}
    