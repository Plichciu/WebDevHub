import styles from './CardsBenefits.module.css'

const CardsBenefit = () => {
	const data = [
		{
			title: 'Globalny zasięg',
			text: 'Dzięki internetowi Twoja strona może zostać odwiedzona przez ludzi na całym świecie. To otwiera drzwi do nowych rynków i klientów spoza lokalnej społeczności.',
		},
		{
			title: 'Dostępność 24/7',
			text: 'Strona internetowa działa przez całą dobę, co oznacza, że ​​klienci mogą zapoznać się z ofertą i informacjami o Twoim biznesie w każdej chwili.',
		},
		{
			title: 'Kreowanie marki',
			text: 'Strona internetowa pozwala wykreować silny wizerunek marki poprzez dostosowane treści, grafikę i styl komunikacji. Dzięki niej można przekonująco przedstawić wartości, misję i historię biznesu.',
		},
		{
			title: 'Wiarygodność',
			text: 'W dzisiejszych czasach posiadanie strony internetowej stało się oczekiwaną normą dla wielu firm. Nieobecność w sieci może budzić podejrzenia u klientów co do wiarygodności firmy.',
		},
	]

	return (
		<div className={styles.container}>
			{data.map((item, index) => {
				return (
					<div
						key={index}
						data-aos="flip-left"
						data-aos-duration="1000"
						data-aos-delay={index * 200}
						className={styles.card}>
						<div className={styles.box}>
							<div className={styles.content}>
								<h2>0{index + 1}</h2>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
								<span></span>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CardsBenefit
