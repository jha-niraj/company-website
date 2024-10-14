import React from 'react'
import FeedbackItems from './feedbackItems'
    

    
const FeedbackLine = (props) => {
    const style1 = {transform: `translateX(-${props.xdir})`};
    // console.log(props.childid)
  return (
    <div id='line1' className='fline flex gap-6 my-10 ' style={style1} >
      <FeedbackItems/>
      <FeedbackItems/>
      <FeedbackItems/>
      <FeedbackItems/>
      <FeedbackItems/>
      <FeedbackItems/>
    </div>
  )
}

export default FeedbackLine
