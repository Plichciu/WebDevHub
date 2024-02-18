import aboutImg from '../../images/aboutImg.jpg'
import wavyLines from '../../images/wavyLines.svg'
import Title from '../Title/Title'

const About = () => {
	return (
		
			<section id="about" className="content-container relative">
				<div className="absolute -right-36 -bottom-20 lg:-bottom-32">
					<img src={wavyLines} className="opacity-65 w-[20rem] lg:w-fit" alt='' />
				</div>
				<div className="flex flex-col gap-12 lg:flex-row">
					<div className="mx-auto">
						<img
							src={aboutImg}
							alt="Zdjęcie przedstawiające sekcję o nas"
							className="rounded-md hover:scale-95 transition-transform"
						/>
					</div>
					<div className="lg:flex lg:flex-col lg:items-start">
						<Title text="Kim jesteśmy?" />
						<div>
							<p className="text-center lg:text-left">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quam
								dolorum. Tempora illo possimus delectus quia optio ullam repudiandae
								illum? <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Nisi, dolorum!
							</p>
						</div>
					</div>
				</div>
			</section>
	
	)
}

export default About
