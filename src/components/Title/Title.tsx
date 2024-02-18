const Title = ({ text}: { text: string }) => {
	return (
		<div className="flex flex-col items-center mb-10">
			<h2 className="text-center text-white  text-4xl">{text}</h2>
			<span className={`bg-yellowColor w-[30%] lg:w-[15%] mx-auto mt-2 mb-6 lg:mt-4 lg:mb-10 lg:mx-0`}></span>
		</div>
	)
}

export default Title
