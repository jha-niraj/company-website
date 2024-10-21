import React from 'react'
import downRight from './Assets/down-right.png'
import downrightt from './Assets/down-rightt.png'
import FeedbackLine from './FeedbackLine'

const Feedback = () => {

  return (
    <div id='feedbacks' className='bg-black h-[900px]'>
      <div className='flex justify-center items-center' data-aos="fade-up">
        <img src={downRight} className='h-10 mt-10 mr-5' alt="down arrow"/>
        <h1 className='text-white text-5xl font-semibold text-center' >Hear From Our <span className='text-blue-500 '>Clients</span></h1>
        <img src={downrightt} className='h-10 mt-10 ml-5' alt="down arrow" />
      </div>
      <p id='feedback-intro' className='text-2xl text-center mt-6'>Discover what our satisfied clients have to say about their experiences with us.</p>
      
      <FeedbackLine xdir='0px' id="line1" childid='line1'/>
      <FeedbackLine xdir='160px' childid='line2'/>
      <hr />
    </div>
  )
}

export default Feedback;