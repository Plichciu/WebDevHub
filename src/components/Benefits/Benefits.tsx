import styles from './Benefits.module.css'

const Benefits = () => {
	return (
		<section className="content-container">
			<div className="relative">
				<h2 className="text-center text-4xl">
					Dlaczego powinieneś posiadać swoją własną stronę internetową dla twojego
					biznesu?
				</h2>
				<span className="bg-yellowColor w-80 mx-auto mt-2 mb-6 "></span>
			</div>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.box}>
						<div className={styles.content}>
							<h2>01</h2>
							<h3>Globalny zasięg</h3>
							<p>
								Dzięki internetowi Twoja strona może zostać odwiedzona przez ludzi na
								całym świecie. To otwiera drzwi do nowych rynków i klientów spoza lokalnej
								społeczności.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.box}>
						<div className={styles.content}>
							<h2>02</h2>
							<h3>Dostępność 24/7</h3>
							<p>
								Strona internetowa działa przez całą dobę, co oznacza, że ​​klienci mogą
								zapoznać się z ofertą i informacjami o Twoim biznesie w każdej chwili.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.box}>
						<div className={styles.content}>
							<h2>03</h2>
							<h3>Kreowanie marki</h3>
							<p>
								Strona internetowa pozwala wykreować silny wizerunek marki poprzez
								dostosowane treści, grafikę i styl komunikacji. Dzięki niej można
								przekonująco przedstawić wartości, misję i historię biznesu.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.box}>
						<div className={styles.content}>
							<h2>04</h2>
							<h3>Wiarygodność</h3>
							<p>
								W dzisiejszych czasach posiadanie strony internetowej stało się oczekiwaną
								normą dla wielu firm. Nieobecność w sieci może budzić podejrzenia u
								klientów co do wiarygodności firmy.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Benefits
