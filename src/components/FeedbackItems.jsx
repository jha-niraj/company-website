import React from 'react'
import man1 from './Assets/profiles/man1.png'
import man2 from './Assets/profiles/man2.png'
import man3 from './Assets/profiles/man3.png'
import man4 from './Assets/profiles/man4.png'
import man5 from './Assets/profiles/man5.png'
import man6 from './Assets/profiles/man6.png'
import man7 from './Assets/profiles/man7.png'
import man8 from './Assets/profiles/man8.png'
import man9 from './Assets/profiles/man9.png'
import man10 from './Assets/profiles/man10.png'
import man11 from './Assets/profiles/man11.png'
import man12 from './Assets/profiles/man12.png'
import man13 from './Assets/profiles/man13.png'
import man14 from './Assets/profiles/man14.png'

const FeedbackItems = () => {
  const profiles = [man1,man2,man3,man4,man5,man6,man7,man8,man9,man10,man11,man12,man13,man14];
  const randomItem =()=> {
    const num = Math.floor(Math.random() * 14);
    return num;
  }
  return (
    <div id='feedback-item' className='p-7 bg-white text-black text-xl min-h-80 min-w-80 border-gray-300 border-[1px] rounded-2xl'>
      <div id='profile' className='flex items-center gap-6'>
        <img src={profiles[randomItem()]} className='h-16' alt="profile pic" />
        <p className='text-2xl'>randome user</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut illo consequatur minus, possimus eos id quisquam at reiciendis quam libero voluptatem distinctio odit sed? Placeat officiis quaerat error architecto.</p>
      
    </div>
  )
}

export default FeedbackItems
