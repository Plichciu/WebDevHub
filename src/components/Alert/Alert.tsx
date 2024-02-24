import { MdErrorOutline } from 'react-icons/md'
import { GoCheckCircle } from 'react-icons/go'

const Alert = ({ message }: { message: string }) => {
	return (
		<div
			role="alert"
			className={`alert ${
				message === 'Dziękujemy, twój formularz został wysłany poprawnie.'
					? 'alert-success'
					: 'alert-error'
			} flex fixed w-[90%] sm:w-96 bottom-5 left-5 opacity-80`}>
			<span>
				{message === 'Dziękujemy, twój formularz został wysłany poprawnie.' ? (
					<GoCheckCircle className="text-xl" />
				) : (
					<MdErrorOutline className="text-xl" />
				)}
			</span>
			<p>{message}</p>
		</div>
	)
}

export default Alert
