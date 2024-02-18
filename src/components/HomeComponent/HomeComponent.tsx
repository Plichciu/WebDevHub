import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import About from '../About/About'
import Benefits from '../Benefits/Benefits'
import ChooseUs from '../ChooseUs/ChooseUs'
import Steps from '../Steps/Steps'
import Offer from '../Offer/Offer'
import FaqSection from '../FaqSection/FaqSection'
import FormSection from '../FormSection/FormSection'
import Footer from '../Footer/Footer'

const HomeComponent = () => {
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
				<FaqSection />
			</div>
			<div className="text-xl  bg-secondColor text-white ">
				<FormSection />
			</div>
			<div className="bg-mainColor text-white border-t  border-gray-400">
				<Footer />
			</div>
		</div>
	)
}

export default HomeComponent
