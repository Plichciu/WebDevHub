import mainLogoBlack from '../../images/mainLogoBlack.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
				<a href="#main" className="cursor-pointer">
					<img src={mainLogoBlack} alt="Logo WebDevHub" className="h-10" />
				</a>
				<div className="text-sm space-y-1 lg:flex lg:items-center lg:gap-5 lg:space-y-0">
					<div className="flex items-center gap-2">
						<FaMailBulk />
						<p className="hover:text-accentColor transition-colors">
							kontakt@webdevhub.pl
						</p>
					</div>
					<div className="flex items-center gap-2">
						<FaPhoneSquareAlt />
						<p className="hover:text-accentColor transition-colors">579 265 646</p>
					</div>
					<div className="flex items-center gap-2">
						<FaFacebookSquare />
						<p className="hover:text-accentColor transition-colors">
							<a target="_blank" href="https://www.facebook.com/webdevhubpl/">
								facebook.com/webdevhub.pl
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
