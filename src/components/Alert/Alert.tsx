import React from 'react'

const Alert = ({ message }: { message: string }) => {
	return (
		<div
			role="alert"
			className={`alert ${
				message === 'Dziękujemy, twój formularz został wysłany poprawnie.'
					? 'alert-success'
					: 'alert-error'
			} flex fixed w-[90%] sm:w-96 bottom-5 left-5 opacity-80`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<p>{message}</p>
		</div>
	)
}

export default Alert
