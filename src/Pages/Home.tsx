import Steps from '../components/Steps/Steps'
import About from '../components/About/About'
import Benefits from '../components/Benefits/Benefits'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'

import Offer from '../components/Offer/Offer'
import FormSection from '../components/FormSection/FormSection'

const Home = () => {
	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<Main />
			<div className="text-xl overflow-hidden bg-mainColor text-white relative">
				<About />
				<Benefits />
				<ChooseUs />
			</div>
			<div className="bg-secondColor">
				<Steps />
			</div>
			<div className="bg-mainColor">
				<Offer />
			</div>
			<div className="text-xl  bg-secondColor text-white ">
				<FormSection />
			</div>
		</div>
	)
}

export default Home
