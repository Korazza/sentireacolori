import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import rabbia from '../../public/images/emozioni/rabbia.png'
import fanzine from '../../public/images/rivista.png'

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
					<Link
						href='https://issuu.com/francescabarchiesi/docs/francesca_barchiesi_18417_sentire_a_colori_libro_c'
						target='_blank'
					>
						<button className={styles.fanzineBtn}>Scopri il libro</button>
					</Link>
				</div>
			</section>
			<section id='abstract' className={styles.section2}>
				<div
					className={styles.content2}
					data-aos='fade-right'
					data-aos-delay='50'
					data-aos-offset='350'
					data-aos-easing='ease-in-out'
				>
					<strong>
						Ciao! Benvenut*
						<br />
						<u>Come é nato questo progetto?</u>
					</strong>
					<br />
					<br />
					Il progetto é nato da un&apos;esigenza di aiutare le persone che non
					riescono ad avere un rapporto
					&quot;sano&quot; con le proprie emozioni, io per prima ho sempre avuto
					un rapporto complicato con esse,
					crescendo peró ho iniziato a mettermi in discussione, a parlare con
					&quot;me stessa&quot;, ho imparato
					ad ascoltarmi. E il mio obiettivo é proprio quello di aiutare, per
					quanto possibile, a
					normalizzare le nostre debolezze.
					Il progetto é nato da tre emozioni fondamentali:{' '}
					<strong>
						<u>Tristezza, Rabbia e Felicitá</u>. Sono tre
						delle emozioni piú forti che possiamo provare nella vita di tutti i
						giorni
					</strong>
				</div>
			</section>
			<section id='shop' className={styles.section3}>
				<div className={styles.rabbia}>
					<Image
						src={rabbia}
						alt='Rabbia'
						fill={true}
						sizes='(max-width: 768px) 33vw, (max-width: 1280px) 100vw'
						data-aos='fade-up-right'
						data-aos-delay='350'
						data-aos-offset='450'
						data-aos-easing='linear'
						className={styles.rabbiaImg}
					/>
				</div>
				<div className={styles.fanzine}>
					<Image
						src={fanzine}
						alt='Fanzine'
						fill={true}
						sizes='(max-width: 768px) 33vw, (max-width: 1280px) 100vw'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-offset='350'
						data-aos-easing='ease-in-out'
						className={styles.copertinaFanzine}
					/>
				</div>
			</section>
			<Footer />
		</main>
	)
}
