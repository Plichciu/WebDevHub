import { useState } from 'react'

const Accordion = () => {
	const [isOpen, setIsOpen] = useState({
		question1: true,
		question2: false,
		question3: false,
	})

	return (
		<div className="mx-auto max-w-[50rem] text-xl">
			<div className="accordion text-white space-y-5">
				<div
					onClick={() =>
						setIsOpen({
							question1: !isOpen.question1,
							question2: false,
							question3: false,
						})
					}
					className="accordion-item border-b border-gray-800 group">
					<div className="accordion-title px-4 py-2 cursor-pointer">
						<p className="text-xl  text-accentColor group-hover:text-[#cfa304]">
							Jak długo zajmuje tworzenie strony internetowej?
						</p>
					</div>
					<div
						className={`accordion-content px-4 py-2 transition-transform duration-500 ${
							isOpen.question1 ? 'visible translate-y-0' : 'invisible translate-y-[-90%]'
						}`}>
						{isOpen.question1 && (
							<p className="text-slate-200">
								Czas potrzebny na stworzenie strony internetowej zależy od jej złożoności
								i indywidualnych wymagań klienta. Zazwyczaj staramy się dostarczyć
								pierwszą wersję projektu w ciągu kilku dni.
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
					className="accordion-item border-b border-gray-800 group">
					<div className="accordion-title px-4 py-2 cursor-pointer">
						<p className="text-xl  text-accentColor group-hover:text-[#cfa304]">
							Czy muszę dostarczyć własne grafiki/materiały do strony?
						</p>
					</div>
					<div
						className={`accordion-content px-4 py-2 transition-transform ${
							isOpen.question2 ? 'visible translate-y-0' : 'invisible translate-y-[-50%]'
						}`}>
						{isOpen.question2 && (
							<p>
								Możesz dostarczyć własne treści i grafiki, ale jeśli potrzebujesz pomocy,
								możemy również zaoferować usługi związane z kreacją treści oraz grafik.
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
					className="accordion-item border-b border-gray-800 group">
					<div className="accordion-title px-4 py-2 cursor-pointer">
						<p className='text-accentColor group-hover:text-[#cfa304]'>
							Czy będę miał/a możliwość edycji treści na mojej stronie po jej ukończeniu?
						</p>
					</div>
					<div
						className={`accordion-content px-4 py-2 transition-transform ${
							isOpen.question3 ? 'visible translate-y-0' : 'invisible translate-y-[-50%]'
						}`}>
						{isOpen.question3 && (
							<p>
								Tak, zapewniamy dostęp do panelu administracyjnego, dzięki któremu będziesz mógł/mogła łatwo aktualizować treści na swojej stronie bez konieczności posiadania specjalistycznej wiedzy technicznej.
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
