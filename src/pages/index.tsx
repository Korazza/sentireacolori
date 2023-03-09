import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

export default function Home() {
	return (
		<main className='container'>
			<Navbar />
			<section className={styles.section1}>
				<div className={styles.content1}>
					Impariamo a conoscere
					<br />
					le nostre emozioni insieme
					<br />
					<Link href='#shop'>
						<button className={styles.fanzineBtn}>Scopri la Fanzine</button>
					</Link>
				</div>
			</section>
			<section id='abstract' className={styles.section2}>
				<div className={styles.content2}>
					<strong>
						Ciao! Benvenut*
						<br />
						<u>Come é nato questo progetto?</u>
					</strong>
					<br />
					<br />
					Il progetto é nato da un&apos;esigenza di aiutare le persone che non
					riescono ad avere un rapporto
					<br />
					&quot;sano&quot; con le proprie emozioni, io per prima ho sempre avuto
					un rapporto complicato con esse,
					<br />
					crescendo peró ho iniziato a mettermi in discussione, a parlare con
					&quot;me stessa&quot;, ho imparato
					<br />
					ad ascoltarmi. E il mio obiettivo é proprio quello di aiutare, per
					quanto possibile, a
					<br />
					normalizzare le nostre debolezze.
					<br />
					Il progetto é nato da tre emozioni fondamentali:{' '}
					<strong>
						<u>Tristezza, Rabbia e Felicitá</u>. Sono tre
						<br />
						delle emozioni piú forti che possiamo provare nella vita di tutti i
						giorni
					</strong>
				</div>
			</section>
			<section id='shop' className={styles.section3}>
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
