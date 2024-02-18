
import Title from '../Title/Title'

const ChooseUs = () => {
	return (

			<section id="chooseus" className="content-container">
				<Title text="Dlaczego warto nas wybrać?" />
				<div className="relative">
					<div className="flex gap-2 flex-wrap justify-center items-start max-w-3xl  mx-auto group">
						<div className="basis-[20%] md:basis-[25%] group-hover:-translate-y-5 transition-transform">
							<h2 className="text-[4rem] md:text-[8rem] text-gray-600 font-bold mt-5 md:mt-10 group-hover:text-yellowColor transition-colors">
								01
							</h2>
						</div>

						<div className="self-start basis-[73%]">
							<h3 className="text-3xl">Lorem, ipsum dolor.</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
								voluptatem debitis illum corporis tenetur libero.
							</p>
						</div>
						<span className="basis-full mt-2 bg-yellowColor"></span>
					</div>
				</div>
			</section>

	)
}

export default ChooseUs
