import Title from '../Title/Title'
import styles from './Offer.module.css'
import squareLines from '../../images/squareLines.svg'
import ScrollSpy from 'react-ui-scrollspy'

const Offer = () => {
	return (
		<ScrollSpy>
			<section id="offer" className="content-container relative">
				<div className="absolute -left-36 -bottom-20 lg:-bottom-64">
					<img src={squareLines} className="opacity-65 w-[20rem] lg:w-[30rem]" alt="" />
				</div>
				<Title text="Co oferujemy?" />
				<div className="flex flex-col flex-wrap  items-center justify-center lg:gap-10 lg:flex-row">
					<div className={styles.card}>
						<div className={`${styles.pic} ${styles.pic1} ${styles.img1}`}>
							<div className={styles.content}>
								<h3 className={styles.title}>Landing page</h3>
							</div>
						</div>
						<div className={`${styles.pic} ${styles.pic2}`}>
							<div className={styles.content}>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque
									minus iste veritatis provident at.
								</p>
								<p className={styles.price}>Cena ustalana indywidualnie</p>
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div className={`${styles.pic} ${styles.pic1} ${styles.img2}`}>
							<div className={styles.content}>
								<h3 className={styles.title}>Strona OnePage</h3>
							</div>
						</div>
						<div className={`${styles.pic} ${styles.pic2}`}>
							<div className={styles.content}>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque
									minus iste veritatis provident at.
								</p>
								<p className={styles.price}>Cena ustalana indywidualnie</p>
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div className={`${styles.pic} ${styles.pic1} ${styles.img3}`}>
							<div className={styles.content}>
								<h3 className={styles.title}>Strona MultiPage</h3>
							</div>
						</div>
						<div className={`${styles.pic} ${styles.pic2}`}>
							<div className={styles.content}>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque
									minus iste veritatis provident at.
								</p>
								<p className={styles.price}>Cena ustalana indywidualnie</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</ScrollSpy>
	)
}

export default Offer
