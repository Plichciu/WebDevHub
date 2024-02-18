import { FaFacebookMessenger } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import styles from './FormSection.module.css'
import FormContact from '../FormContact/FormContact'
import Title from '../Title/Title'

const FormSection = () => {
	return (
	
			<section id="contact" className="content-container ">
				<Title text="Skontaktuj się z nami" />
				<div className="flex flex-col justify-center items-center lg:flex-row gap-5">
					<div className="w-[90%] lg:w-[50%]">
						<div>
							<div className="space-y-8 flex flex-col items-center lg:items-start  lg:justify-between">
								<div
									className={`${styles.card} group hover:scale-105 transition-transform`}>
									<FaFacebookMessenger className="absolute -top-5 -left-5 text-yellowColor opacity-50 text-[7rem] group-hover:scale-110 group-hover:rotate-90 transition-transform" />{' '}
									<div>
										<p>Facebook:</p>
										<a href="">Link</a>
									</div>
								</div>
								<div
									className={`${styles.card} group hover:scale-105 transition-transform`}>
									<MdEmail className="absolute -rotate-45 -top-5 -left-5 text-yellowColor opacity-50  text-[7rem] group-hover:scale-110 group-hover:rotate-45 transition-transform" />{' '}
									<div>
										<p>Email</p>
										<p>kontakt@webdevhub.pl</p>
									</div>
								</div>
								<div
									className={`${styles.card} group hover:scale-105 transition-transform`}>
									<FaPhone className="absolute -top-5 -left-5 text-yellowColor opacity-50 text-[7rem]  group-hover:scale-110 group-hover:rotate-90 transition-transform" />{' '}
									<div>
										<p>Telefon:</p>
										<p> 579 265 646</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<FormContact />
				</div>
			</section>
		
	)
}

export default FormSection
