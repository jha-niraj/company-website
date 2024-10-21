import React from 'react'
import webgif from './Assets/WebsiteDesign.gif'

const Aim = () => {
  return (
    <div id='our-client' className='m-10 flex gap-32 items-center'>

        <div data-aos="fade-up" id='aim-left' className='w-[65%] '>
            <h1 className='text-5xl font-bold '>We Provide Best <br /> <span className='text-blue-700'>Business</span> Solutions</h1>
            <p className='text-xl my-5'>Join our vibrant community of learners and gain access to a vast library of resources, expert guidance, and collaborative support. o dicta vel eius pariatur Corporis  Unlock your full potential and achieve your goals with confidence.</p>
            <button className='px-5 py-2 bg-blue-600 rounded-xl hover:bg-white hover:text-blue-700 transition-'>Get Started</button>
        </div>
        <div id='aim-right'>
            <img data-aos="zoom-in-up" src={webgif} className='' alt="" />
        </div>
      
    </div>
  )
}

export default Aim
