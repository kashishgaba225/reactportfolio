import React from 'react'
import imag from '../assets/Logo.png'
import { FaInstagram,FaLinkedin,FaWhatsapp,FaFacebook } from "react-icons/fa6";




export default function Navbar() {
  return (
    <nav className='flex mb-20 items-center justify-between py-6 px-20 text-white'>
        
        <div className='flex  flex-shrink-0 items-center'>
            <div className=' font-bold hover:scale-110 duration-300 hover:ring-2 ring-indigo-950 cursour-pointer '><img className='h-[50px] w-[100px]' src={imag} alt="" /></div>
        </div>
        <div className='flex px-5 gap-4 text-2xl items-center m-5'>
         <a className='hover:scale-125 duration-300 icon-gradient bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-500 rounded-md' href='https://www.instagram.com/_haryanvii_05?igsh=d2o0MW05N2Q4N29x'> <FaInstagram/></a>
          <a className='hover:scale-125 duration-300 text-blue-800 ' href='https://www.linkedin.com/in/harshad-kumar-9a7661274?utm_source=share&utm_capaign=share-via&utm_content=profile&utm_medium=ios_app'><FaLinkedin/></a>
          <a className='hover:scale-125 duration-300 text-green-500 rounded-xl' href='https://wa.me/qr/KS4CO7IDDHQMA1'><FaWhatsapp/></a>
          <a className='hover:scale-125 duration-300 text-blue-700 rounded-xl' href='https://www.facebook.com/ch.harsh.pawar?mibextid=wwXIfr&mibextid=wwXIfr'><FaFacebook/></a>


        </div>

        
    </nav>
  )
}
