import React,{useState} from 'react'

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
    <div className="xl:w-[50%] w-[100%]">
        <form onSubmit={handleSubmit}>
            <div id='form-fields' className="">
                <div className="my-0">
                    <input type="text" id="name" name="name" placeholder="*Name" value={formData.name} onChange={handleChange} required
                        className="h-16 w-[40%] text-2xl m-5 rounded-full text-black pl-5"
                    />
                    <input type="email" id="email" name="email" placeholder="*email" value={formData.email} onChange={handleChange} required 
                        className="h-16 w-[40%] text-2xl m-5 rounded-full text-black pl-5"
                    />
                </div>
                <div>
                    <input type="number" id="number" name="number" placeholder="*Number" value={formData.number} onChange={handleChange} required
                        className="h-16 w-[40%] text-2xl m-5 rounded-full text-black pl-5"
                    />
                    <input type="text" id="subject" name="subject" placeholder="*Subject" value={formData.subject} onChange={handleChange} required
                        className="h-16 w-[40%] text-2xl m-5 rounded-full text-black pl-5"
                    />
                </div>
                <textarea type="text" id="message" name="message" value={formData.message} onChange={handleChange}required
                    rows="4" cols="50" placeholder="Enter your message"
                    className="h-[20%] w-[83%] pl-5 p-5 text-2xl m-5 rounded-2xl text-black "
                />
              </div>
            <button type="submit" className="h-16 w-[83%] pl-5 p-5 text-2xl m-5 rounded-2xl text-black bg-white">Submit</button>
        </form>
        
      </div>
  )
}

export default ContactForm
