import Title from '../Title/Title'
import styles from './Steps.module.css'

const Steps = () => {
	const data = [
		{
			title: 'Kontakt',
			text: 'Skontaktuj się z nami w sekcji kontakt. Opisz nam szczegóły strony. Jeśli nie masz pomysłu na stronę, nie przejmuj się pomożemy.',
		},
		{
			title: 'Materiały',
			text: 'Jeżeli posiadasz swoje materiały (zdjęcia, logo) prześlij je nam na maila.',
		},
		{
			title: 'Projekt graficzny',
			text: 'Następnie wykonujemy projekt graficzny strony.',
		},
		{
			title: 'Zaliczka',
			text: 'Po akcjeptacji projektu graficznego, należy wpłacić wcześniej uzgodnioną zaliczkę.',
		},
		{
			title: 'Gotowa strona',
			text: 'W ciągu kilku dni tworzymy stronę i ewentualnie wnosimy poprawki po konsultacji.',
		},
	]

	return (
		<section id="steps" className="content-container">
			<Title text="Jak zacząć z nami współpracę?" />
			<div className={styles.timelineItems}>
				{data.map((item, index) => {
					return (
						<div key={index} className={styles.timelineItem}>
							<div className={styles.timelineDot}></div>
							<div
								data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
								data-aos-delay="100"
								className={styles.timelineDate}>
								Etap {index + 1}
							</div>
							<div
								data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
								data-aos-delay="500"
								className={styles.timelineContent}>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Steps
