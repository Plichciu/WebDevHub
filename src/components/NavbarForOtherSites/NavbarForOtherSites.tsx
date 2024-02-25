import logo from '../../images/mainLogoBlack.svg'
import { FiPhone } from 'react-icons/fi'

const NavbarForOtherSites = () => {
	return (
		<div className="bg-[#00000060] h-20 mx-auto fixed z-[500] w-full">
			<div className="navbar max-w-[1800px] mx-auto h-full ">
				<div className="navbar-start">
					<div className="flex items-center">
						<div className="w-44">
							<a href="https://webdevhub.pl/">
								<img src={logo} alt="Logo WebDevHub" className="h-10 ml-3 lg:ml-0" />
							</a>
						</div>
					</div>
				</div>
				<div className="navbar-end">
					<a
						href="/#contact"
						className="block bg-[#cfa304] text-white px-6 py-2 rounded-sm uppercase font-semibold hover:bg-hoverButton transition-colors duration-500">
						<FiPhone className=" text-xl inline-block -mt-1 mr-1" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default NavbarForOtherSites
