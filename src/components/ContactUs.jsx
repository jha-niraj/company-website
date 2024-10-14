import React,{useState} from "react";
import contactGif from './Assets/Customersupport2.gif'
import ContactForm from "./ContactForm";

const ContactUs = () => {

  return (
    <div className="">
      <h1 className="text-5xl font-semibold text-center m-20 mb-5">SEND US A <span className="text-blue-500">MESSAGE</span></h1>
      <p className="text-center text-2xl ">Have questions or feedback? We're here to help. Send us a message, and we'll respond within 2 hours</p>
      <div className="xl:flex justify-around items-center w-screen mt-16">
        <ContactForm/>
        <div className="w-[50%]">
            <img src={contactGif} alt="" className="w-[90%] sm:hidden xl:block" />
        </div>
        </div>
    </div>
  );
};

export default ContactUs;

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Textarea } from "@/components/ui/textarea"

// export default function Component() {
//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-8">
//       <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//         <span className="text-gray-900">Hey! We are </span>
//         <span className="text-gray-400">ready</span>
//         <br />
//         <span className="text-gray-900">to </span>
//         <span className="text-blue-400">consult you</span>
//         <span className="text-neutral-300">_</span>
//       </h1>
      
//       <div className="space-y-4">
//         <div>
//           <Label htmlFor="name" className="text-lg text-gray-700">My name is</Label>
//           <Input id="name" className="mt-1 text-lg" placeholder="first and last name" />
//         </div>
        
//         <div className="flex items-baseline gap-2">
//           <Label htmlFor="service" className="text-lg text-gray-700">and I'm interested in</Label>
//           <Input id="service" className="flex-grow text-lg" placeholder="service name" />
//           <span className="text-2xl text-gray-400">.</span>
//         </div>
        
//         <div>
//           <Label className="text-lg text-gray-700">My project budget</Label>
//           <RadioGroup className="mt-2 flex gap-4">
//             {["$1-5K", "$5-10K", "$10-20K", "$20-50K", ">50K"].map((budget) => (
//               <div key={budget} className="flex items-center">
//                 <RadioGroupItem value={budget} id={budget} className="peer sr-only" />
//                 <Label
//                   htmlFor={budget}
//                   className="px-3 py-2 rounded-full bg-gray-100 peer-checked:bg-blue-100 peer-checked:text-blue-600 cursor-pointer"
//                 >
//                   {budget}
//                 </Label>
//               </div>
//             ))}
//           </RadioGroup>
//           <span className="text-2xl text-gray-400">.</span>
//         </div>
        
//         <div className="flex items-baseline gap-2">
//           <Label htmlFor="email" className="text-lg text-gray-700">Please, contact me at</Label>
//           <Input id="email" className="flex-grow text-lg" placeholder="name@example.com" />
//           <span className="text-2xl text-gray-400">.</span>
//         </div>
        
//         <div className="flex items-baseline gap-2">
//           <Label htmlFor="details" className="text-lg text-gray-700">Optionally, I'm sharing more:</Label>
//           <Textarea id="details" className="flex-grow text-lg" placeholder="your project details" />
//           <span className="text-2xl text-gray-400">.</span>
//         </div>
//       </div>
      
//       <Button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg">
//         Send request
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="ml-2 h-4 w-4"
//         >
//           <line x1="5" y1="12" x2="19" y2="12" />
//           <polyline points="12 5 19 12 12 19" />
//         </svg>
//       </Button>
//     </div>
//   )
// }
