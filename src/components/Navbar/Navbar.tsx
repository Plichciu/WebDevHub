import logo from '../../images/mainLogoBlack.svg'
import Drawer from '../Drawer/Drawer'

const Navbar = () => {
	return (
		<div className="bg-[#00000060] h-20 mx-auto fixed z-[500] w-full">
			<div className="navbar max-w-[1800px] mx-auto h-full ">
				<div className="navbar-start">
					<div className="lg:hidden">
						<Drawer />
					</div>
					<div>
						<a href="#main">
							<img
								src={logo}
								alt="Logo WebDevHub"
								className="h-10 ml-4 max-[380px]:ml-8 lg:ml-0"
							/>
						</a>
					</div>
				</div>
				<nav className="navbar-center hidden lg:flex lg:gap-5 text-lg  text-white">
					<a
						href="#about"
						className="hover:text-yellowColor hover:scale-90 transition-all duration-500 ">
						O nas
					</a>
					<a
						href="#benefits"
						className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
						Korzyści
					</a>
					<a
						href="#chooseus"
						className="hover:text-yellowColor hover:scale-90 transition-all duration-500 ">
						Dlaczego my?
					</a>
					<a
						href="#steps"
						className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
						Współpraca
					</a>
					<a
						href="#offer"
						className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
						Oferta
					</a>
					<a
						href="#faq"
						className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
						FAQ
					</a>
				</nav>
				<div className="navbar-end">
					<a
						href="#contact"
						className="block bg-[#cfa304] text-white px-8 py-2 rounded-sm uppercase font-semibold hover:bg-hoverButton transition-colors duration-500">
						Kontakt
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
