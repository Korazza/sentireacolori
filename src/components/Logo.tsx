import localFont from '@next/font/local'

import styles from '@/styles/Logo.module.css'

const kgHappy = localFont({ src: '../assets/KGHAPPY.ttf' })

export default function Logo() {
	return (
		<div className={styles.logo}>
			<span className={styles.logoText1}>Sentire</span>
			<span className={`${styles.logoText2} ${kgHappy.className}`}>
				{' '}
				a colori
			</span>
		</div>
	)
}
