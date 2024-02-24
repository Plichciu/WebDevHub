import Title from '../Title/Title'

const ChooseUs = () => {
	return (
		<section id="chooseus" className="content-container">
			<Title text="Dlaczego warto nas wybrać?" />
			<div className="relative space-y-28 my-40">
				<div className="flex gap-2 flex-wrap justify-center items-start max-w-3xl  mx-auto group">
					<div className="basis-[20%] md:basis-[25%] group-hover:-translate-y-5 transition-transform">
						<span
							data-aos="fade-up"
							className="text-[4rem] md:text-[8rem] text-gray-600 font-bold mt-5 md:mt-10 block group-hover:text-accentColor transition-colors">
							01
						</span>
					</div>
					<div data-aos="fade-up" data-aos-delay="300" className="self-start basis-[73%]">
						<h3 className="text-3xl">Indywidualne podejście</h3>
						<p className="text-slate-300 mt-4">
							Rozumiemy, że każdy klient ma unikalne potrzeby i cele. Dlatego też staramy
							się dostosować moje usługi do konkretnych wymagań każdego projektu.
						</p>
					</div>
					<span className="basis-[90%] md:basis-full h-[1px] mt-4 bg-accentColor"></span>
				</div>

				<div className="flex gap-2 flex-wrap justify-center items-start max-w-3xl  mx-auto group">
					<div className="basis-[20%] md:basis-[25%] group-hover:-translate-y-5 transition-transform">
						<span
							data-aos="fade-up"
							className="text-[4rem] md:text-[8rem] text-gray-600 font-bold mt-5 md:mt-10 block group-hover:text-accentColor transition-colors">
							02
						</span>
					</div>

					<div data-aos="fade-up" data-aos-delay="300" className="self-start basis-[73%]">
						<h3 className="text-3xl">Konkurencyjne ceny</h3>
						<p className="text-slate-300 mt-4">
							Pomimo wysokiej jakości usług, staramy się utrzymywać konkurencyjne ceny,
							aby nasze usługi były dostępne dla szerokiego spektrum klientów.
						</p>
					</div>
					<span className="basis-[90%] md:basis-full h-[1px] mt-4 bg-accentColor"></span>
				</div>

				<div className="flex gap-2 flex-wrap justify-center items-start max-w-3xl  mx-auto group">
					<div className="basis-[20%] md:basis-[25%] group-hover:-translate-y-5 transition-transform">
						<span
							data-aos="fade-up"
							className="text-[4rem] md:text-[8rem] text-gray-600 font-bold mt-5 md:mt-10 block group-hover:text-accentColor transition-colors">
							03
						</span>
					</div>

					<div data-aos="fade-up" data-aos-delay="300" className="self-start basis-[73%]">
						<h3 className="text-3xl">Skuteczna komunikacja</h3>
						<p className="text-slate-300 text-xl mt-4">
							Stawiamy na transparentność i otwartą komunikację z klientami. Zapewniamy
							regularne aktualizacje dotyczące postępu projektu oraz jesteśmy otwarci na
							wszelkie sugestie i uwagi.
						</p>
					</div>
					<span className="basis-[90%] md:basis-full h-[1px] mt-4 bg-accentColor"></span>
				</div>

				<div className="flex gap-2 flex-wrap justify-center items-start max-w-3xl  mx-auto group">
					<div className="basis-[20%] md:basis-[25%] group-hover:-translate-y-5 transition-transform">
						<span
							data-aos="fade-up"
							className="text-[4rem] md:text-[8rem] text-gray-600 font-bold mt-5 md:mt-10 block group-hover:text-accentColor transition-colors">
							04
						</span>
					</div>

					<div data-aos="fade-up" data-aos-delay="300" className="self-start basis-[73%]">
						<h3 className="text-3xl">Wysoka jakość</h3>
						<p className="text-slate-300 text-xl mt-4">
							Nasze strony internetowe są tworzone z dbałością o każdy szczegół, aby były
							nie tylko estetyczne, ale także funkcjonalne i zoptymalizowane pod kątem
							wydajności oraz SEO.
						</p>
					</div>
					<span className="basis-[90%] md:basis-full h-[1px] mt-4 bg-accentColor"></span>
				</div>
			</div>
		</section>
	)
}

export default ChooseUs
