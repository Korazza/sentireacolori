import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

import Logo from './Logo'
import styles from '@/styles/Navbar.module.css'

const links = ['Emozioni', 'Abstract', 'Shop']

export default function Navbar() {
	const { data: session, status } = useSession()

	return (
		<header className={styles.navbar}>
			{/*
			<div>
				{status === 'authenticated' ? (
					<>
						<span>{session.user?.name ?? session.user?.email}</span>
						<button onClick={() => signOut()}>Sign Out</button>
					</>
				) : (
					<button onClick={() => signIn()}>Login</button>
				)}
			</div>
			*/}
			<Logo />
			<nav className={styles.navigationContainer}>
				<ul className={styles.navigation}>
					{links.map((link) => (
						<li key={link} className={styles.navigationLink}>
							<Link href={`#${link.toLowerCase()}`} scroll={false}>
								{link}
							</Link>
						</li>
					))}
					<li key='Login' className={styles.navigationLink}>
						Login
					</li>
				</ul>
			</nav>
		</header>
	)
}
