import styles from './Main.module.css'

const Main = () => {
	return (
		<div className="bg-mainColor relative">
			<div className={`${styles.area} h-screen mx-auto p-4 overflow-y-hidden `}>
				<ul className={`${styles.circles}`}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div className="relative text-white h-screen lg:flex lg:flex-col lg:justify-center max-w-[1800px] mx-auto">
					<div className="relative flex flex-col justify-center h-full lg:h-[60%] ">
						<div className="relative xl:w-1/2">
							<h1 className="text-5xl font-bold lg:text-[3.5rem] xl:text-[5.5rem]">
								Tworzymy profesjonalne <br className="hidden lg:block" /> strony
								Internetowe
							</h1>
							<h2>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, facilis!
							</h2>
							<button className='button-main'>Więcej</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
