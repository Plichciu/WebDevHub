import { useState } from 'react'
import HamburgerButton from '../HamburgerButton/HamburgerButton'

const Drawer = () => {
	const [checked, setChecked] = useState('')

	const handleClick = () => {
		checked == 'checked' ? setChecked('') : setChecked('checked')
	}

	return (
		<div className="drawer z-30  lg:hidden ">
			<input
				id="my-drawer"
				type="checkbox"
				className="drawer-toggle"
				checked={checked === 'checked'}
			/>
			<div className="drawer-content">
				<label htmlFor="my-drawer" className="drawer-button p-2 relative z-50">
					<HamburgerButton handleClick={handleClick} />
				</label>
			</div>
			<div className="drawer-side">
				<label
					onClick={handleClick}
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"></label>
				<nav className="menu p-4 w-80 min-h-full gap-5 text-white bg-mainColor text-xl">
					<a
						onClick={handleClick}
						href="#about"
						className="hover:text-accentColor transition-color duration-500 p-2 mt-16  ">
						O nas
					</a>

					<a
						onClick={handleClick}
						href="#benefits"
						className="hover:text-accentColor transition-color duration-500 p-2">
						Korzyści
					</a>

					<a
						onClick={handleClick}
						href="#chooseus"
						className="hover:text-accentColor transition-color duration-500 p-2">
						Dlaczego my?
					</a>

					<a
						onClick={handleClick}
						href="#steps"
						className="hover:text-accentColor transition-color duration-500 p-2">
						Współpraca
					</a>

					<a
						onClick={handleClick}
						href="#offer"
						className="hover:text-accentColor transition-color duration-500 p-2">
						Oferta
					</a>

					<a
						onClick={handleClick}
						href="#faq"
						className="hover:text-accentColor transition-color duration-500 p-2">
						FAQ
					</a>
				</nav>
			</div>
		</div>
	)
}

export default Drawer
