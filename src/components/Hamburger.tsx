import { MouseEventHandler } from 'react'

import styles from '@/styles/Hamburger.module.css'

interface HamburgerProps {
	className?: string | undefined
	toggle: boolean
	onToggle: () => void
}

export default function Hamburger({
	className,
	toggle,
	onToggle,
}: HamburgerProps) {
	return (
		<div
			onClick={onToggle}
			className={`${styles.burger} ${toggle ? styles.toggled : ''} ${className}`}
		>
			<div className={styles.burgerLine}></div>
			<div className={styles.burgerLine}></div>
			<div className={styles.burgerLine}></div>
		</div>
	)
}
