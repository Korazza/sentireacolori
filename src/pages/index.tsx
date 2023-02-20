import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
	return (
		<main className='container'>
			<section className={styles.section1}>
				<Navbar />
				<div className={styles.content1}>
					Impariamo a conoscere
					<br />
					le nostre emozioni insieme
					<br />
					<button className={styles.fanzineBtn}>Scopri la Fanzine</button>
				</div>
			</section>
		</main>
	)
}
