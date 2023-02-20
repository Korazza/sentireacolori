import styles from '@/styles/Logo.module.css'

export default function Logo() {
	return (
		<div className={styles.logo}>
			<span className={styles.logoText1}>Sentire</span>
			<span className={styles.logoText2}>
				{' '}
				a colori
			</span>
		</div>
	)
}
