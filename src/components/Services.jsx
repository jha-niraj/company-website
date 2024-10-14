import React from 'react'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <div>
      <h1 className='ml-[10%] mb-3 text-3xl bolder text-gray-300 font-semibold'>OUR SERVICES </h1>
      <hr className='w color-gray-400'/>
      <div className='mx-[10%] my-[5%] flex flex-col items-center lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
      </div>
    </div>
  )
}

export default Services
