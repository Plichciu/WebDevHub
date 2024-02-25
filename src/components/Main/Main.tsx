import LightsAnimation from '../LightsAnimation/LightsAnimation'
import styles from './Main.module.css'

const Main = () => {
	return (
		<main id="main" className="bg-mainColor relative ">
			<div className="">
				<div className={`${styles.area} h-screen mx-auto p-8 overflow-y-hidden `}>
					<LightsAnimation />
					<div className="relative text-white h-screen lg:flex lg:flex-col lg:justify-center max-w-[1800px] mx-auto">
						<div className="relative flex flex-col justify-center h-full lg:h-[60%] ">
							<div className="relative xl:w-1/2 space-y-5 lg:space-y-12">
								<h1
									data-aos="fade-right"
									className="xxs:text-3xl text-5xl font-bold lg:text-[3.2rem] xl:text-[5rem]">
									Tworzymy profesjonalne <br className="hidden lg:block" /> strony
									Internetowe
								</h1>
								<h2 data-aos="fade-right" data-aos-delay="300" className="text-xl italic">
									Twój biznes, nasza pasja - Tworzymy strony internetowe, które wyróżniają
									się!
								</h2>
								<a
									data-aos="fade-right"
									data-aos-delay="500"
									href="#offer"
									className="button-a-main">
									Oferta
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
