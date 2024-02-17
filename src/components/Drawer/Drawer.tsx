import './DrawerStyles.css'

const Drawer = () => {
	return (
		<div className="drawer z-30 lg:hidden">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label htmlFor="my-drawer" className="drawer-button p-2 relative z-50">
					<div className="hamburger  my-auto">
						<span className="top-bun"></span>
						<span className="beef"></span>
						<span className="bottom-bun"></span>
					</div>
				</label>
			</div>
			<div className="drawer-side ">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"></label>
				<nav className="menu p-4 w-80 min-h-full gap-5 text-white bg-mainColor text-xl">
					<a
						href=""
						className="hover:text-yellowColor transition-color duration-500 mt-16 p-2">
						O nas
					</a>
					<a
						href=""
						className="hover:text-yellowColor transition-color duration-500 p-2">
						Usługi
					</a>
					<a
						href=""
						className="hover:text-yellowColor transition-color duration-500 p-2">
						Dlaczego my?
					</a>
				</nav>
			</div>
		</div>
	)
}

export default Drawer
