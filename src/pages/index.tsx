import localFont from '@next/font/local'

import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

const kgHappy = localFont({ src: '../assets/KGHAPPY.ttf' })

export default function Home() {
	return (
		<main className='container'>
			<section className={styles.section1}>
				<Navbar />
				<div className={`${styles.content1} ${kgHappy.className}`}>
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
