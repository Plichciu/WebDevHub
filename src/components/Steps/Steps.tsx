import Title from '../Title/Title'
import styles from './Steps.module.css'


const Steps = () => {
	return (
		<section id="steps" className="content-container">
			<Title text="Jak zacząć z nami współpracę?" />
			<div>
				<div className={styles.timelineItems}>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div data-aos="fade-right" className={styles.timelineDate}>
							Etap 1
						</div>
						<div
							data-aos="fade-right"
							data-aos-delay="300"
							className={styles.timelineContent}>
							<h3>Kontakt</h3>
							<p>
								Skontaktuj się z nami w sekcji <a href="#contact">kontakt</a>. Opisz nam
								szczegóły strony. Jeśli nie masz pomysłu na stronę, nie przejmuj się
								pomożemy.
							</p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div data-aos="fade-left" className={styles.timelineDate}>
							Etap 2
						</div>
						<div
							data-aos="fade-left"
							data-aos-delay="300"
							className={styles.timelineContent}>
							<h3>Materiały</h3>
							<p>
								Jeżeli posiadasz swoje materiały (zdjęcia, logo) prześlij je nam na maila.
							</p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div data-aos="fade-right" className={styles.timelineDate}>
							Etap 3
						</div>
						<div
							data-aos="fade-right"
							data-aos-delay="300"
							className={styles.timelineContent}>
							<h3>Projekt graficzny</h3>
							<p>Następnie wykonujemy projekt graficzny strony. </p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div data-aos="fade-left" className={styles.timelineDate}>Etap 4</div>
						<div
							data-aos="fade-left"
							data-aos-delay="300"
							className={styles.timelineContent}>
							<h3>Zaliczka</h3>
							<p>
								Po akcjeptacji projektu graficznego, należy wpłacić wcześniej uzgodnioną
								zaliczkę.
							</p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div data-aos="fade-right" className={styles.timelineDate}>
							Etap 5
						</div>
						<div
							data-aos="fade-right"
							data-aos-delay="300"
							className={styles.timelineContent}>
							<h3>Gotowa strona</h3>
							<p>
								W ciągu kilku dni tworzymy stronę i ewentualnie wnosimy poprawki po
								konsultacji.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Steps
