import { FaStarOfLife } from 'react-icons/fa6'
import { FaFacebookMessenger } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import styles from './FormSection.module.css'

const FormSection = () => {
	return (
		<section className="content-container flex flex-col justify-center items-center lg:flex-row gap-5 ">
			<div className="w-[90%] lg:w-[50%]">
				<div>
					<div className="space-y-8 flex flex-col items-center lg:items-start  lg:justify-between">
						<div className={`${styles.card} group hover:scale-105 transition-transform`}>
							<FaFacebookMessenger className="absolute -top-5 -left-5 text-yellowColor opacity-50 text-[7rem] group-hover:scale-110 group-hover:rotate-90 transition-transform" />{' '}
							<div>
								<p>Facebook:</p>
								<a href="">Link</a>
							</div>
						</div>
						<div className={`${styles.card} group hover:scale-105 transition-transform`}>
							<MdEmail className="absolute -rotate-45 -top-5 -left-5 text-yellowColor opacity-50  text-[7rem] group-hover:scale-110 group-hover:rotate-45 transition-transform" />{' '}
							<div>
								<p>Email</p>
								<p>kontakt@webdevhub.pl</p>
							</div>
						</div>
						<div className={`${styles.card} group hover:scale-105 transition-transform`}>
							<FaPhone className="absolute -top-5 -left-5 text-yellowColor opacity-50 text-[7rem]  group-hover:scale-110 group-hover:rotate-90 transition-transform" />{' '}
							<div>
								<p>Telefon:</p>
								<p> 579 265 646</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center mt-10 w-[90%] lg:w-[50%]">
				<form className="flex flex-col w-full space-y-5" action="">
					<div className="flex flex-col w-full">
						<label htmlFor="name">Imię</label>
						<div className="relative">
							<input
								className=" w-full mt-2 p-3 bg-transparent border-gray-400 border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black"
								type="text"
								id="name"
							/>
							<FaStarOfLife className="text-red-500 absolute top-[50%] right-4 translate-y-[-50%] text-sm" />
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="email">Email</label>
						<div className="relative">
							<input
								className=" w-full mt-2 p-3 bg-transparent border-gray-400 border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black"
								type="email"
								id="email"
							/>
							<FaStarOfLife className="text-red-500 absolute top-[50%] right-4 translate-y-[-50%] text-sm" />
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="phone">Telefon</label>
						<input
							className=" w-full p-3 mt-2 bg-transparent border-gray-400 border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black"
							type="tel"
							id="phone"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="message">Wiadomość</label>
						<div className="relative">
							<textarea
								rows={5}
								className=" w-full mt-2 p-3 bg-transparent border-gray-400 border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black"
								id="message"></textarea>
							<FaStarOfLife className="text-red-500 absolute top-10 right-4 translate-y-[-50%] text-sm" />
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default FormSection
