import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.info}>
				<Image
					src='/images/fanzine-digitale.png'
					alt='Fanzine digitale'
					width='155'
					height='219'
					className={styles.copertinaFanzine}
				/>
				<div className={styles.contatti}>
					<span className={styles.heading}>Contatti</span>
					<Link href='mailto:sentireacolori@gmail.com' target='_blank'>
						sentireacolori@gmail.com
					</Link>
					<span className={styles.number}>+39 3471234567</span>
					<Link className={styles.social} href=''>
						<Image
							src='/images/icons8-facebook.png'
							alt='Facebook icon'
							width='24'
							height='24'
						/>
						@sentireacolori
					</Link>
					<Link
						className={styles.social}
						target='_blank'
						href='https://www.instagram.com/sentireacolori'
					>
						<Image
							src='/images/icons8-instagram.png'
							alt='Instagram icon'
							width='24'
							height='24'
						/>
						@sentireacolori
					</Link>
				</div>
				<div className={styles.emotincolor}>
					<span className={styles.heading}>Emotincolor</span>
					<Link
						className={styles.social}
						href='https://issuu.com/francescabarchiesi/docs/francesca_barchiesi_18417_sentire_a_colori_libro_c'
						target='_blank'
					>
						Fanzine
					</Link>
				</div>
			</div>
			<div className={styles.copyright}>© 2023 sentireacolori</div>
		</footer>
	)
}
