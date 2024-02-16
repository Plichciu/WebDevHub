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
						<a href="">
							<img
								src={logo}
								alt="Logo WebDevHub"
								className="h-10 ml-4 max-[380px]:ml-8 lg:ml-0"
							/>
						</a>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex  text-white">
					<ul className="menu menu-horizontal text-xl px-1">
						<li className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
							<a>O nas</a>
						</li>
						<li className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
							<a>Dlaczego my?</a>
						</li>
						<li className="hover:text-yellowColor hover:scale-90 transition-all duration-500">
							<a>Usługi</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Button</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
