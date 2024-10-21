import React from 'react'
import servicesLogo from './Assets/services.jpg'
import macIcon from './Assets/machine.png'
import upRightarrow from './Assets/up-right-arrow.png'

const ServicesItem = () => {
  return (
    <div id='services-item' className='p-4 border-y rounded-xl bg-[#000000]'
    data-aos="fade-in"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top"
    >
      <div className='flex items-center mb-4'>
        <img src={macIcon} alt="" className='h-8 w-8 bg-black' />
        <h1 className='ml-5 text-xl bolder '>OUR SERVICE</h1>
      </div>
      <p className='text-left ml-5 mr-5 text-gray-300 text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut quisquam libero aliquid iure. Sunt aspernatur, tenetur nihil illum repellat esse modi amet quas officia voluptas quidem iure delectus saepe.</p>
      <button className='mt-4'><span className='text-xl text-blue-500 m-5'>Learn more</span></button>
    </div>
  )
}

export default ServicesItem
