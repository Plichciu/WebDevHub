import { useState } from 'react'

const Accordion = () => {
	const [selected, setSelected] = useState(0)

	const questions = [
		{
			question: 'Jak długo zajmuje tworzenie strony internetowej?',
			answer:
				'Czas potrzebny na stworzenie strony internetowej zależy od jej złożoności i indywidualnych wymagań klienta. Zazwyczaj staramy się dostarczyć pierwszą wersję projektu w ciągu kilku dni.',
		},
		{
			question: 'Czy muszę dostarczyć własne grafiki/materiały do strony?',
			answer:
				'Możesz dostarczyć własne treści i grafiki, ale jeśli potrzebujesz pomocy, możemy również zaoferować usługi związane z kreacją treści oraz grafik.',
		},
		{
			question:
				'Czy będę miał/a możliwość edycji treści na mojej stronie po jej ukończeniu?',
			answer:
				'Tak, zapewniamy dostęp do panelu administracyjnego, dzięki któremu będziesz mógł/mogła łatwo aktualizować treści na swojej stronie bez konieczności posiadania specjalistycznej wiedzy technicznej.',
		},
	]

	const handleToggle = (index: number) => {
		setSelected(selected === index ? -1 : index)
	}

	return (
		<div className="mx-auto max-w-[50rem] text-xl">
			<div className="accordion text-white space-y-5">
				{questions.map((q, index) => {
					return (
						<div key={index} className="accordion-item border-b border-gray-500 group">
							<div
								onClick={() => handleToggle(index)}
								className="accordion-title px-4 py-2 cursor-pointer">
								<p className="text-xl  text-accentColor group-hover:text-[#cfa304]">
									{q.question}
								</p>
							</div>
							<div
								className={`accordion-content px-4 py-2 transition-transform duration-500 ${
									selected === index
										? 'visible translate-y-0'
										: 'invisible translate-y-[-40%]'
								}`}>
								{selected === index && <p className="text-slate-200">{q.answer}</p>}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Accordion
