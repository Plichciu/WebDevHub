import Navbar from '../Navbar/Navbar'

const NotFoundComponent = () => {
	return (
		<>
			<Navbar />
			<div className="bg-mainColor h-screen flex items-center justify-center">
				<h1 className="text-4xl text-white"> 404 - Nie znaleziono takiej strony</h1>
			</div>
		</>
	)
}

export default NotFoundComponent
