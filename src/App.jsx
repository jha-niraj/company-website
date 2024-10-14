import { useState } from 'react'
import './App.css'
import './output.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services';
import Feedback from './components/Feedback'
import ScrollMoveComponent from './components/NewComponent'
import ContactUs from './components/ContactUs'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='app bg-black text-white'>
			<NavBar/>
			<Hero/>
			<Services/>
			<Feedback/>
			<ContactUs/>
			{/* <ScrollMoveComponent/> */}
			{/* <p className='text-#ee0181 font-bold font-ramaraja'>hello tailwind</p> */}
		</div>
	)
}

export default App;
