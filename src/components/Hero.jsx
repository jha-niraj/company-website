import React from 'react';
import metal from './Assets/metal-thing.png'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-black'>
      <div id='full-hero' className="mt-[5%]" >
        <div className='lg:flex justify-center items-center' data-aos="slide-down" >
          <div id='hero-right' className="flex lg:justify-center items-center ">
              <img src={metal} className="h-36 z-10 -mr-20 mobile:w-40 tablet:w-auto"/>
              <h1 className="text-8xl xl:text-9xl">DESIGN</h1>
          </div>
          <h1 className='text-8xl xl:text-9xl'> WITH</h1>
        </div>
        <div id='hero-left' className="flex lg:justify-center items-center" data-aos="slide-up">
            <h1 className="text-8xl xl:text-9xl leading-tight xl:leading-none" id='hero-left-heading'>DEVELOPER <span className='bg-gradient-to-l from-blue-700  to-black pr-10'>CODER'z</span></h1>
        </div>
        <div id='discription' className='m-20 text-xl'>
            <h1 className='text-center font-light' data-aos="fade-in" > Join our vibrant community of learners and gain access to a vast library of resources, expert guidance, and collaborative support.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur possimus, quo dicta vel eius pariatur nobis fuga beatae quas. Non nesciunt eligendi, accusantium aliquam est expedita! Corporis eveniet cupiditate vero.
            Unlock your full potential and achieve your goals with confidence.</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
