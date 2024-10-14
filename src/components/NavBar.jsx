import React from 'react'
import logo2 from './Assets/logo2.png'
import arrow from './Assets/icons/right-arrow.png'


const NavBar = () => {
  return (
    <div>
      <nav className='p-3 ml-5 mr-8 flex bg-black justify-between items-center border-b-[1px]'>
        <a href="#"  id="" className='flex gap-3 items-center'>
          <img src={logo2} alt="company-logo" className='h-20'/>
          <span className='text-5xl font-ramaraja mt-3' >The Coderz</span>
        </a>
        <button className='px-10 py-4 mt-2 rounded-full text-2xl bg-blue-700 flex items-center gap-3 max-hidden shadow-md hover:-translate-y-1 transition group'><span>Contact us</span><img src={arrow} alt="caaow" className='h-7 group-hover:translate-x-2 transition' /></button>
      </nav>
    </div>
  )
}

export default NavBar
