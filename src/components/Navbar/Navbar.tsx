import logo from '../../images/mainLogoBlack.svg'
import Drawer from '../Drawer/Drawer'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'

const Navbar = () => {
	return (
		<div className="bg-[#000000b0] h-20 mx-auto fixed z-[500] w-full">
			<div className="navbar max-w-[1800px] mx-auto h-full ">
				<div className="navbar-start">
					<div className="flex items-center">
						<div className="lg:hidden">
							<Drawer />
						</div>
						<div className='w-44 lg:w-60'>
							<Link to="/">
								<img src={logo} alt="Logo WebDevHub" className="h-10 lg:h-14 ml-3 lg:ml-0" />
							</Link>
						</div>
					</div>
				</div>
				<nav className="navbar-center hidden lg:flex lg:gap-5 text-lg  text-white">
					<a
						href="#about"
						className="hover:text-accentColor hover:scale-90 transition-all duration-500 ">
						O nas
					</a>
					<a
						href="#benefits"
						className="hover:text-accentColor hover:scale-90 transition-all duration-500">
						Korzyści
					</a>
					<a
						href="#chooseus"
						className="hover:text-accentColor hover:scale-90 transition-all duration-500 ">
						Dlaczego my?
					</a>
					<a
						href="#steps"
						className="hover:text-accentColor hover:scale-90 transition-all duration-500">
						Współpraca
					</a>
					<a
						href="#offer"
						className="hover:text-accentColor hover:scale-90 transition-all duration-500">
						Oferta
					</a>
					<a
						href="#faq"
						className="hover:text-accentColor hover:scale-90 transition-all duration-500">
						FAQ
					</a>
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
