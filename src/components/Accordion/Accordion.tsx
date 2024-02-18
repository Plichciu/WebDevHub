import { useState } from 'react'

const Accordion = () => {
	const [isOpen, setIsOpen] = useState({
		question1: true,
		question2: false,
		question3: false,
	})

	return (
		<div className="mx-auto max-w-[50rem]">
			<div className="accordion text-white space-y-5">
				<div
					onClick={() =>
						setIsOpen({
							question1: !isOpen.question1,
							question2: false,
							question3: false,
						})
					}
					className="accordion-item border-b border-gray-800">
					<div className="accordion-title px-4 py-2 cursor-pointer">
						<p className="text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, totam?
						</p>
					</div>
					<div
						className={`accordion-content px-4 py-2 transition-transform duration-500 ${
							isOpen.question1 ? 'visible translate-y-0' : 'invisible translate-y-[-90%]'
						}`}>
						{isOpen.question1 && (
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, corporis.
							</p>
						)}
					</div>
				</div>
				<div
					onClick={() =>
						setIsOpen({
							question2: !isOpen.question2,
							question1: false,
							question3: false,
						})
					}
					className="accordion-item border-b border-gray-800">
					<div className="accordion-title px-4 py-2 cursor-pointer">Pytanie 2</div>
					<div
						className={`accordion-content px-4 py-2 transition-transform ${
							isOpen.question2 ? 'visible translate-y-0' : 'invisible translate-y-[-50%]'
						}`}>
						{isOpen.question2 && (
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, corporis.
							</p>
						)}
					</div>
				</div>
				<div
					onClick={() =>
						setIsOpen({
							question3: !isOpen.question3,
							question1: false,
							question2: false,
						})
					}
					className="accordion-item border-b border-gray-800">
					<div className="accordion-title px-4 py-2 cursor-pointer">Pytanie 3</div>
					<div
						className={`accordion-content px-4 py-2 transition-transform ${
							isOpen.question3 ? 'visible translate-y-0' : 'invisible translate-y-[-50%]'
						}`}>
						{isOpen.question3 && (
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, corporis.
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
