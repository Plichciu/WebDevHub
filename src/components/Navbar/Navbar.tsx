import logo from '../../images/mainLogoBlack.svg'
import Drawer from '../Drawer/Drawer'
import { FiPhone } from 'react-icons/fi'

const Navbar = () => {
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
		<div className="bg-[#000000b0] h-20 mx-auto fixed z-[500] w-full">
			<div className="navbar max-w-[1800px] mx-auto h-full ">
				<div className="navbar-start">
					<div className="flex items-center">
						<div className="lg:hidden">
							<Drawer />
						</div>
						<div className="w-44 lg:w-60">
							<a href="#main">
								<img
									src={logo}
									alt="Logo WebDevHub"
									className="h-10 lg:h-14 ml-3 lg:ml-0"
								/>
							</a>
						</div>
					</div>
				</div>
				<nav className="navbar-center hidden lg:flex lg:gap-5 text-lg  text-white">
					{navItems.map((item, index) => {
						return (
							<a
								key={index}
								href={item.link}
								className="hover:text-accentColor mx-2 hover:scale-90 transition-all duration-500 ">
								{item.name}
							</a>
						)
					})}
				</nav>
				<div className="navbar-end">
					<a
						href="#contact"
						className="block bg-[#cfa304] text-white px-6 py-2 rounded-sm uppercase font-semibold hover:bg-hoverButton transition-colors duration-500">
						<FiPhone className=" text-xl inline-block -mt-1 mr-1" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
