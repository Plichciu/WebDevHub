import styles from './LightsAnimation.module.css'
import bluelight from '../../images/bluelight.png'

const Squares = () => {
	return (
		<ul className={styles.lights}>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
			<li>
				<img src={bluelight} alt="" />
			</li>
		</ul>
	)
}

export default Squares
