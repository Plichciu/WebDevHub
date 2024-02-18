import { FormEvent, useState } from 'react'
import { FaStarOfLife } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Alert from '../Alert/Alert'
import { db } from '../../database/firebase'
import { addDoc, collection } from 'firebase/firestore'

const FormContact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [terms, setTerms] = useState(false)
	const [showAlert, setShowAlert] = useState({ show: false, message: '' })
	const [loadingButton, setLoadingButton] = useState(false)

	const showAlertFn = (message: string) => {
		setShowAlert({ show: true, message: message })
		let timer = setTimeout(() => setShowAlert({ show: false, message: message }), 3000)
		return () => {
			clearTimeout(timer)
		}
	}

	const sendtoDb = async () => {
		const docRef = collection(db, 'contact')

		const payload = { name: name, email: email, phone: phone, message: message }
		try {
			setLoadingButton(true)
			await addDoc(docRef, payload)
			showAlertFn('Dziękujemy, twój formularz został wysłany poprawnie.')
			setEmail('')
			setMessage('')
			setName('')
			setPhone('')
			setTerms(false)
			setLoadingButton(false)
		} catch (error) {
			console.error('Error adding document: ', error)
			showAlertFn(`Wystąpił błąd, spróbuj ponownie, błąd: ${error}`)
		}
	}

	const validateForm = (e: FormEvent) => {
		e.preventDefault()

		if (name === '' || email === '' || message === '') {
			showAlertFn('Wypełnij wszystkie pola')
			return
		}
		if (!terms) {
			showAlertFn('Zaakceptuj politykę prywatności')
			return
		}
		sendtoDb()
	}

	return (
		<div className="flex justify-center items-center mt-10 w-[90%] lg:w-[50%]">
			<form className="flex flex-col w-full space-y-5" action="">
				<div className="flex flex-col w-full">
					<label htmlFor="name">Imię</label>
					<div className="relative">
						<input
							value={name}
							onChange={e => setName(e.target.value)}
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
							value={email}
							onChange={e => setEmail(e.target.value)}
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
						value={phone}
						onChange={e => setPhone(e.target.value)}
						className=" w-full p-3 mt-2 bg-transparent border-gray-400 border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black"
						type="tel"
						id="phone"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message">Wiadomość</label>
					<div className="relative">
						<textarea
							value={message}
							onChange={e => setMessage(e.target.value)}
							rows={5}
							className=" w-full mt-2 p-3 bg-transparent border-gray-400 border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black resize-none"
							id="message"></textarea>
						<FaStarOfLife className="text-red-500 absolute top-10 right-4 translate-y-[-50%] text-sm" />
					</div>
				</div>
				<div>
					<input
						onChange={e => setTerms(e.target.checked)}
						type="checkbox"
						id="terms"
						checked={terms}
					/>
					<label htmlFor="terms" className="text-sm text-gray-300 ml-2">
						Przeczytałem oraz akcjeptuję{' '}
						<Link
							target="_blank"
							className="underline hover:text-yellowColor transition-colors"
							to="/polityka-prywatnosci">
							politykę prywatności
						</Link>
					</label>
				</div>
				<button
					onClick={validateForm}
					type="submit"
					className="button-main focus:bg-blue-600">
					{loadingButton ? 'Wysyłanie...' : 'Wyślij'}
				</button>
			</form>
			{showAlert.show ? <Alert message={showAlert.message} /> : ''}
		</div>
	)
}

export default FormContact
