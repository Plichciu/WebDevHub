import aboutImg from '../../images/aboutImg.jpg'
import wavyLines from '../../images/wavyLines.svg'
import Title from '../Title/Title'

const About = () => {
	return (
		<section id="about" className="content-container relative">
			<div className="absolute -right-12 -bottom-20 lg:-bottom-32">
				<img src={wavyLines} className="opacity-65 w-[20rem] lg:w-fit" alt="" />
			</div>
			<div className="flex flex-col gap-12 lg:flex-row lg:basis-[40%]">
				<div data-aos="fade-right" className="mx-auto">
					<img
						src={aboutImg}
						alt="Zdjęcie przedstawiające sekcję o nas"
						className="rounded-md hover:scale-95 transition-transform"
					/>
				</div>
				<div className="lg:flex lg:flex-col lg:items-start lg:basis-[60%]">
					<Title text="Kim jesteśmy?" />
					<div>
						<p className="text-center text-xl lg:text-left">
							Jesteśmy zespołem dwóch pasjonatów{' '}
							<span className="text-accentColor">front endu</span>, którzy postanowili
							połączyć swoje umiejętności i doświadczenie, aby pomóc klientom w kreowaniu
							dynamicznych i funkcjonalnych stron internetowych. Jako studenci informatyki
							z głębokim zainteresowaniem technologią internetową, zdecydowaliśmy się
							podjąć wyzwanie wspólnego tworzenia innowacyjnych rozwiązań online.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
