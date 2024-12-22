import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import About from './components/About'
import Software from './components/Software'
import Experience from './components/Experience'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className='overflow-x-auto'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute inset-0 -z-10 h-screen w-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-10'>

      <Navbar/>
      <Content/>
      <About/>
      <Software/>
      <Experience/>
      <Contact/>
      </div>
    </div>
  )
}
