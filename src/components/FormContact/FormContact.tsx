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
			showAlertFn('Proszę uzupełnić wszystkie pola oznaczone gwiazdką')
			return
		}
		if (!terms) {
			showAlertFn('Proszę zaakceptować politykę prywatności')
			return
		}
		sendtoDb()
	}

	const dataInputs = [
		{
			label: 'Imię',
			type: 'text',
			id: 'name',
			value: name,
			onChange: (e: any) => setName(e.target.value),
			mandatory: true,
		},
		{
			label: 'Email',
			type: 'email',
			id: 'email',
			value: email,
			onChange: (e: any) => setEmail(e.target.value),
			mandatory: true,
		},
		{
			label: 'Telefon',
			type: 'text',
			id: 'phone',
			value: phone,
			onChange: (e: any) => setPhone(e.target.value),
			mandatory: false,
		},
	]

	return (
		<div className="flex justify-center items-center mt-10 w-[90%] lg:w-[50%]">
			<form className="flex flex-col w-full space-y-5" action="">
				{dataInputs.map((input, index) => {
					return (
						<div key={index} className="flex flex-col">
							<label htmlFor={input.id}>{input.label}</label>
							<div className="relative">
								<input
									value={input.value}
									onChange={input.onChange}
									className=" w-full p-3 mt-2 bg-transparent border-gray-400  border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black"
									type={input.type}
									id={input.id}
								/>
								{input.mandatory ? (
									<FaStarOfLife className="text-red-500 absolute top-1/2 right-5 translate-y-[-50%] text-sm" />
								) : (
									''
								)}
							</div>
						</div>
					)
				})}
				<div className="flex flex-col">
					<label htmlFor="message">Wiadomość</label>
					<div className="relative">
						<textarea
							value={message}
							onChange={e => setMessage(e.target.value)}
							rows={5}
							className=" w-full mt-2 p-3 bg-transparent border-gray-400  border-2 border-solid rounded-md focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out focus:text-black resize-none"
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
						className="cursor-pointer"
					/>
					<label htmlFor="terms" className="text-sm text-gray-300 ml-2">
						Przeczytałem oraz akcjeptuję{' '}
						<Link
							target="_blank"
							className="underline hover:text-accentColor transition-colors"
							to="/polityka-prywatnosci">
							politykę prywatności
						</Link>
					</label>
				</div>
				<button onClick={validateForm} type="submit" className="call-to-action-button">
					{loadingButton ? 'Wysyłanie...' : 'Wyślij'}
				</button>
			</form>
			{showAlert.show ? <Alert message={showAlert.message} /> : ''}
		</div>
	)
}

export default FormContact
