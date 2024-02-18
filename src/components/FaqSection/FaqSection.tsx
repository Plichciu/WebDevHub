import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'

const FaqSection = () => {
	return (
		
			<section id="faq" className="content-container ">
				<Title text="FAQ" />
				<div>
					<Accordion />
				</div>
			</section>
	
	)
}

export default FaqSection
