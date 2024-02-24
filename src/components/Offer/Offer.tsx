import Title from '../Title/Title'
import styles from './Offer.module.css'
import squareLines from '../../images/squareLines.svg'

const Offer = () => {
	return (
		<section id="offer" className={`content-container ${styles.section}`}>
			<div className={styles.container}>
				<div className={styles.imgContainer}>
					<img src={squareLines} className={styles.img} alt="" />
				</div>
				<Title text="Co oferujemy?" />
				<div className={styles.cardsContainer}>
					<div data-aos="zoom-in" className={styles.card}>
						<div className={`${styles.pic} ${styles.img1}`}>
							<div className={styles.title}>
								<h3>Landing Page</h3>
							</div>
						</div>

						<div className={styles.content}>
							<p>
								Landing Page to dedykowana strona internetowa zaprojektowana w celu
								konwersji użytkowników poprzez wyraźne wezwania do działania (CTA). Jest
								to narzędzie skupiające uwagę na konkretnym produkcie, usłudze lub
								zdarzeniu.
							</p>
							<p className={styles.price}>Od 300 zł</p>
						</div>

						<span className={styles.bottomLine}></span>
					</div>
					<div data-aos="zoom-in" className={styles.card}>
						<div className={`${styles.pic} ${styles.img2}`}>
							<div className={styles.title}>
								<h3>Strona OnePage</h3>
							</div>
						</div>

						<div className={styles.content}>
							<p>
								Strona Onepage to idealne rozwiązanie dla tych, którzy chcą szybko i
								skutecznie zaprezentować swoją firmę, produkt lub usługę w formie jednej
								strony internetowej.
								Strona może zawierać sekcje takie jak: o firmie, oferta, portfolio, opinie
								klientów, formularz kontaktowy.
							</p>
							<p className={styles.price}>Od 500 zł</p>
						</div>
						<span className={styles.bottomLine}></span>
					</div>
					<div data-aos="zoom-in" className={styles.card}>
						<div className={`${styles.pic}  ${styles.img3}`}>
							<div className={styles.title}>
								<h3>Strona MultiPage</h3>
							</div>
						</div>

						<div className={styles.content}>
							<p>
								Strona Multipage to kompleksowe rozwiązanie, które umożliwia bardziej
								rozbudowaną obecność online. Pozwala na przedstawienie firmy, jej oferty i
								wartości w sposób bardziej szczegółowy, korzystając z wielu podstron.
								Strona Multipage składa się z kilku podstron, zwykle łącznie od trzech do
								sześciu podstron internetowych.
							</p>
							<p className={styles.price}>Od 800 zł</p>
						</div>
						<span className={styles.bottomLine}></span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Offer
