import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Shop.module.css'

export default function Shop() {
	return (
		<main className={styles.container}>
			<Navbar />
			<section className={styles.section}>
				<div className={styles.shop}>
					<div className={styles.fanzine}>
						<Image
							src='/images/fanzine.png'
							alt='Fanzine'
							width='373'
							height='496'
							className={styles.copertinaFanzine}
						/>
						<span className={styles.digitalContent}>
							(disponibile anche in versione digitale)
						</span>
					</div>
					<div className={styles.infoFanzine}>
						<div className={styles.infoTitle}>
							Emotincolor
							<div className={styles.infoSubTitle}>
								<i>Impariamo a conoscerci</i>
							</div>
						</div>
						<div className={styles.price}>€ 21.50</div>
						<button onClick={() => signIn} className={styles.shopFanzine}>
							Acquista il tuo libro
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	)
}
