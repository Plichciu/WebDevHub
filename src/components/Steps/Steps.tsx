
import styles from './Steps.module.css'

const Steps = () => {
	return (
		<section className="content-container">
			<div>
				<div className={styles.timelineItems}>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div className={styles.timelineDate}>2015</div>
						<div className={styles.timelineContent}>
							<h3>timeline item title</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.{' '}
							</p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div className={styles.timelineDate}>2015</div>
						<div className={styles.timelineContent}>
							<h3>timeline item title</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.{' '}
							</p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div className={styles.timelineDate}>2015</div>
						<div className={styles.timelineContent}>
							<h3>timeline item title</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.{' '}
							</p>
						</div>
					</div>
					<div className={styles.timelineItem}>
						<div className={styles.timelineDot}></div>
						<div className={styles.timelineDate}>2015</div>
						<div className={styles.timelineContent}>
							<h3>timeline item title</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Steps
