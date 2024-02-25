import { useState } from 'react'
import HamburgerButton from '../HamburgerButton/HamburgerButton'

const Drawer = () => {
	const [checked, setChecked] = useState('')

	const handleClick = () => {
		checked == 'checked' ? setChecked('') : setChecked('checked')
	}

	const navItems = [
		{
			name: 'O nas',
			link: '#about',
		},
		{
			name: 'Korzyści',
			link: '#benefits',
		},
		{
			name: 'Dlaczego my?',
			link: '#chooseus',
		},
		{
			name: 'Współpraca',
			link: '#steps',
		},
		{
			name: 'Oferta',
			link: '#offer',
		},
		{
			name: 'FAQ',
			link: '#faq',
		},
	]

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
				<nav className="menu p-4 w-80 min-h-full gap-5 text-white bg-mainColor text-xl pt-16">
					{navItems.map((item, index) => {
						return (
							<a
								key={index}
								onClick={handleClick}
								href={item.link}
								className="hover:text-accentColor transition-color duration-500 p-2  ">
								{item.name}
							</a>
						)
					})}
				</nav>
			</div>
		</div>
	)
}

export default Drawer
