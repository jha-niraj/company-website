import React from 'react'
import p1 from './Assets/projects/p1.jpg'
import p2 from './Assets/projects/p2.jpg'
import p3 from './Assets/projects/p3.jpg'
import p4 from './Assets/projects/p4.jpg'
import p5 from './Assets/projects/p5.jpg'

const Projects = () => {
  return (
    <div>
        <div id='projects-heading' data-aos="fade-up" className='mx-16'> 
            <h1 className='mb-4 font-bold text-xl'>Our projects</h1>
            <hr className='h-[1px] bg-gray-500 '/>
            <h1 className='text-4xl mt-8'>Our Featured <span className='text-blue-700 font-semibold'>Projects</span></h1>
        </div>
      <div id='images' className='my-10 mx-32'>
        <div id='line1' className='flex justify-center gap-7'>
            <img data-aos="flip-left" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='w-[50%] h-[50%] rounded-2xl' src={p1} alt="" />
            <img data-aos="flip-right" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='w-[50%] h-[50%] rounded-2xl' src={p2} alt="" />
        </div>
        <div id='line2' className='flex justify-center gap-5 my-7'>
            <img data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='w-[33%] h-[40%] rounded-2xl' src={p3} alt="" />
            <img data-aos="flip-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='w-[33%] h-[40%] rounded-2xl' src={p4} alt="" />
            <img data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='w-[33%] h-[40%] rounded-2xl' src={p5} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Projects
