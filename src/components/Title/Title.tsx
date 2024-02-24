const Title = ({ text }: { text: string }) => {
	return (
		<div data-aos="zoom-in" className="flex flex-col items-center mb-8 md:mb-24">
			<h2 className="text-center text-white  text-4xl">{text}</h2>
			<span
				className={`bg-accentColor w-[30%] lg:w-[15%] h-[1px] mx-auto mt-2 mb-6 lg:mt-4 lg:mb-10 lg:mx-0`}></span>
			
		</div>
	)
}

export default Title
