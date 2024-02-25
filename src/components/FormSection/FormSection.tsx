import { FaFacebookMessenger } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import FormContact from '../FormContact/FormContact'
import Title from '../Title/Title'

const FormSection = () => {
	const contactData = [
		{
			icon: (
				<FaFacebookMessenger className="absolute text-accentColor -top-5 -left-5 opacity-70 text-[7rem] group-hover:scale-110 group-hover:rotate-90 transition-transform" />
			),
			title: 'Facebook:',
			text: 'fb.com/webdevhub.pl',
		},
		{
			icon: (
				<MdEmail className="absolute text-accentColor -rotate-45 -top-5 -left-5 opacity-70 text-[7rem] group-hover:scale-110 group-hover:rotate-45 transition-transform" />
			),
			title: 'Email',
			text: 'kontakt@webdevhub.pl',
		},
		{
			icon: (
				<FaPhone className="absolute text-accentColor -top-5 -left-5 opacity-70 text-[7rem] group-hover:scale-110 group-hover:rotate-90 transition-transform" />
			),
			title: 'Telefon:',
			text: '579 265 646',
		},
	]

	return (
		<section id="contact" className="content-container ">
			<div>
				<Title text="Skontaktuj się z nami" />
				<p className="p-5 text-center mb-16 max-w-[95rem] mx-auto">
					Chcesz rozpocząć z nami współpracę nad stroną internetową? Skontaktuj się z nami
					przez wygodny dla Ciebie kanał komunikacji. Jeśli nie wiesz dokładnie czego
					potrzebujesz po prostu napisz do nas, a my pomożemy Ci i przeprowadzimy Cię krok
					po kroku po etapach tworzenia strony internetowej. Nie masz zdjęć/tekstów na
					stronę? Nie ma problemu! Zajmiemy się również tym za Ciebie!
				</p>
			</div>
			<div className="flex flex-col justify-center items-center lg:flex-row gap-5">
				<div className="w-[90%] lg:w-[50%]">
					<div>
						<div className="space-y-8 flex flex-col items-center lg:items-start  lg:justify-between">
							{contactData.map((item, index) => {
								return (
									<div
										key={index}
										className={`flex w-[90%] items-center flex-col p-12 bg-[#1b2028] rounded-md relative gap-[1rem] text-center text-white overflow-hidden group hover:scale-105 transition-transform border border-accentColor`}>
										{item.icon}
										<div>
											<p>{item.title}</p>
											<p className="font-semibold mt-2">{item.text}</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<FormContact />
			</div>
		</section>
	)
}

export default FormSection
