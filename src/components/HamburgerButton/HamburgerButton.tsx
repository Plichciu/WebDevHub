import styles from './HamburgerButton.module.css'

const HamburgerButton = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<div onClick={handleClick} className={styles.hamburger}>
			<span className={styles.topBun}></span>
			<span className={styles.beef}></span>
			<span className={styles.bottomBun}></span>
		</div>
	)
}

export default HamburgerButton
