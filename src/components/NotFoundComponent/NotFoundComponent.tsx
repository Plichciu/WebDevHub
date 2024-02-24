import NavbarForOtherSites from '../NavbarForOtherSites/NavbarForOtherSites'
import { Link } from 'react-router-dom'

const NotFoundComponent = () => {
	return (
		<>
			<NavbarForOtherSites />
			<div className="bg-mainColor h-screen flex items-center justify-center ">
				<div>
					<h1 className="text-4xl text-white  p-5 text-center">
						{' '}
						404 - Nie znaleziono takiej strony
					</h1>
					<p className="text-center text-gray-300">
						Powrót do strony głównej:{' '}
						<Link
							className="text-accentColor underline hover:text-yellow-600 transition-colors"
							to="/">
							kliknij tutaj
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default NotFoundComponent
