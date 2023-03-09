import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Shop.module.css'

export default function Shop() {
	return (
		<main className={styles.container}>
			<Navbar />
			<section className={styles.section}>
				<div className={styles.fanzine}>
					<span>
						<Image
							src='/images/fanzine-digitale.png'
							alt='Fanzine digitale'
							width='373'
							height='528'
							className={styles.copertinaFanzine}
						/>
					</span>
					<span>
						<Image
							src='/images/fanzine.png'
							alt='Fanzine'
							width='373'
							height='496'
							className={styles.copertinaFanzine}
						/>
					</span>
					<div className={styles.contentFanzine}>
						<strong>
							Acquista la tua fanzine!
							<br />
							disponibile anche in versione digitale
						</strong>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	)
}
