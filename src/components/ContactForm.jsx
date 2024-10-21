import React,{useState} from 'react'
import upright from './Assets/right-up.png'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update specific field based on input's name
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    console.log("Form Data Submitted:", formData);
    // You can add your form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="">
        <form onSubmit={handleSubmit}>
            <div id='form-fields' className="my-10">
              <div className='flex gap-4 my-3 items-baseline'>
                <h1 className='text-4xl '>My name is </h1>
                <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required
                    className="text-3xl w-60 px-2 text-white bg-black border-b-[1px] h-10"
                />
                <p>,</p>
                <h1 className='text-4xl '>and I'm interested in </h1>
                <input type="text" id="service" name="service" placeholder="service name" value={formData.service} onChange={handleChange} required
                    className="text-3xl w-60 px-2 text-white bg-black border-b-[1px] h-10"
                />
                <p>.</p>
              </div>
              <div className='flex gap-4 my-3 items-baseline'>
                <h1 className='text-4xl '>Please, contact me at </h1>
                <input type="email" id="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required 
                    className="text-3xl w-60 min-w-fit px-2 text-white bg-black border-b-[1px] h-10"
                />
                <p>.</p>
              </div>
              <div className='gap-4 my-3 items-baseline'>
                <h1 className='text-4xl '>I’m sharing more: </h1>
                <textarea type="text" id="message" name="message" value={formData.message} onChange={handleChange}required
                    rows="4" cols="50" placeholder="Enter your message"
                    className="mt-4 h-40 text-2xl text-white rounded-xl bg-black border-[1px] p-3"
                />
              </div>
              <button type="submit" className="h-16 w-40 text-xl rounded-xl flex justify-center items-center text-black bg-white">
                Send
                <img src={upright} className='h-10' alt="" />
              </button>
            </div>
        </form>
        
      </div>
  )
}

export default ContactForm
