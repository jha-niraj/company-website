import React from 'react'
import servicesLogo from './Assets/services.jpg'
import macIcon from './Assets/machine.png'
import upRightarrow from './Assets/up-right-arrow.png'

const ServicesItem = () => {
  return (
    <div id='services-item' className='h-96 border-[1px] rounded-xl bg-gray-950' 
    data-aos="fade-in"
    data-aos-delay="50"
    data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top"
    >
      <div className='flex items-center m-10'>
        <img src={macIcon} alt="" className='h-14 w-14 bg-black' />
        <h1 className='ml-5 text-3xl bolder '>OUR SERVICE</h1>
      </div>
      <p className='text-left ml-5 mr-5 text-gray-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut quisquam libero aliquid iure. Sunt aspernatur, tenetur nihil illum repellat esse modi amet quas officia voluptas quidem iure delectus saepe.</p>
      <button className='mt-4'><span className='text-xl text-blue-600 m-5'>Learn more</span></button>
    </div>
  )
}

export default ServicesItem
