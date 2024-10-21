import React from 'react'
import logo2 from './Assets/logo2.png'
import arrow from './Assets/icons/right-arrow.png'


const NavBar = () => {
  return (
    <div>
      <nav className='p-1 ml-2 flex bg-black justify-between items-center'>
        <a href="#"  id="" className='flex gap-1 items-center'>
          <img src={logo2} alt="company-logo" className='h-14'/>
          <span className='text-3xl font-ramaraja mt-3' >The Coderz</span>
        </a>
        <button className='px-5 py-2 mt-2 mr-8 rounded-full text-2xl bg-blue-700 flex items-center gap-1 max-hidden shadow-md hover:-translate-y-2 transition group'>
          <span>Contact us</span>
          <img src={arrow} alt="caaow" className='h-5 group-hover:translate-x-3 transition' />
        </button>
      </nav>
    </div>
  )
}

export default NavBar
