import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'
import Pathfinder from '../components/Pathfinder'
import HowItWorks from '../components/HowItWorks'
import Resources from '../components/Resources'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Instructions from '../components/Instructions'
// import { Scrollbars } from 'react-custom-scrollbars-2';


const Home = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<>


			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<HeroSection />
			<Pathfinder />
			<HowItWorks />
			<Instructions />
			<Resources />
			<Contact />
			<Footer />


		</>
		)
}

export default Home;