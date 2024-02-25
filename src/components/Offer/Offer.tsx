import Title from '../Title/Title'
import styles from './Offer.module.css'
import squareLines from '../../images/squareLines.svg'

const Offer = () => {
	const data = [
		{
			title: 'Landing Page',
			text: 'Landing Page to dedykowana strona internetowa zaprojektowana w celu konwersji użytkowników poprzez wyraźne wezwania do działania (CTA). Jest to narzędzie skupiające uwagę na konkretnym produkcie, usłudze lub zdarzeniu.',
			price: 'Od 300 zł',
		},
		{
			title: 'Strona OnePage',
			text: 'Strona Onepage to idealne rozwiązanie dla tych, którzy chcą szybko i skutecznie zaprezentować swoją firmę, produkt lub usługę w formie jednej strony internetowej. Strona może zawierać sekcje takie jak: o firmie, oferta, portfolio, opinie klientów, formularz kontaktowy.',
			price: 'Od 500 zł',
		},
		{
			title: 'Strona MultiPage',
			text: 'Strona Multipage to kompleksowe rozwiązanie, które umożliwia bardziej rozbudowaną obecność online. Pozwala na przedstawienie firmy, jej oferty i wartości w sposób bardziej szczegółowy, korzystając z wielu podstron. Strona Multipage składa się z kilku podstron, zwykle łącznie od trzech do sześciu podstron internetowych.',
			price: 'Od 800 zł',
		},
	]

	return (
		<section id="offer" className={`content-container ${styles.section}`}>
			<div className={styles.container}>
				<div className={styles.imgContainer}>
					<img src={squareLines} className={styles.img} alt="" />
				</div>
				<Title text="Co oferujemy?" />
				<div className={styles.cardsContainer}>
					{data.map((item, index) => {
						return (
							<div className={styles.cardBox} data-aos="zoom-in">
								<div key={index} className={styles.card}>
									<div className={`${styles.pic} ${styles[`img${index + 1}`]}`}>
										<div className={styles.title}>
											<h3>{item.title}</h3>
										</div>
									</div>
									<div>
										<div className={styles.content}>
											<p>{item.text}</p>
											<p className={styles.price}>{item.price}</p>
										</div>
									</div>
									<span className={styles.bottomLine}></span>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Offer
