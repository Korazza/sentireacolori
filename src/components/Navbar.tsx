import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

import Logo from './Logo'
import styles from '@/styles/Navbar.module.css'

const links = ['Emozioni', 'Abstract', 'Shop']

export default function Navbar() {
	const { data: session, status } = useSession()

	return (
		<header className={styles.navbar}>
			<Logo />
			<nav className={styles.navigationContainer}>
				<ul className={styles.navigation}>
					{links.map((link) => (
						<li key={link}>
							<Link href={`#${link.toLowerCase()}`} scroll={false}>
								{link}
							</Link>
						</li>
					))}
					{status === 'authenticated' ? (
						<span className={styles.user}>
							{session.user?.image ? (
								<Image
									src={session.user?.image}
									alt='User image'
									width='32'
									height='32'
								/>
							) : null}
							{session?.user?.name ?? session?.user?.email}
						</span>
					) : null}
					<li key='Login'>
						<div>
							{status === 'authenticated' ? (
								<span className={styles.signout} onClick={() => signOut()}>
									Esci
								</span>
							) : (
								<span onClick={() => signIn()}>Login</span>
							)}
						</div>
					</li>
				</ul>
			</nav>
		</header>
	)
}
