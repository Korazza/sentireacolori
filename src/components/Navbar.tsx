import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

import Logo from './Logo'
import Hamburger from './Hamburger'
import styles from '@/styles/Navbar.module.css'

interface NavigationItem {
	label: string
	link: string
	scroll?: boolean
}

const navItems: NavigationItem[] = [
	{ label: 'Emozioni', link: '/emozioni' },
	{ label: 'Abstract', link: '/#abstract', scroll: false },
	{ label: 'Shop', link: '/shop' },
]

export default function Navbar() {
	const { data: session, status } = useSession()
	const [menuToggle, setMenuToggle] = useState(false)

	return (
		<header className={styles.navbar}>
			<Link href='/'>
				<Logo />
			</Link>
			<nav className={styles.navigationContainer}>
				<Hamburger
					toggle={menuToggle}
					onToggle={() => setMenuToggle((prevToggle) => !prevToggle)}
					className={styles.navBurger}
				/>
				<ul
					className={styles.navigation}
					style={{
						right: menuToggle ? '-20%' : '-200%',
					}}
				>
					{navItems.map((navItem) => (
						<li key={navItem.label.toLocaleLowerCase()}>
							<Link
								onClick={() => setMenuToggle(false)}
								href={navItem.link}
								scroll={navItem.scroll}
							>
								{navItem.label}
							</Link>
						</li>
					))}
					{status === 'authenticated' ? (
						<span className={styles.user}>
							{session.user?.image ? (
								<Image
									src={session.user?.image}
									alt='User image'
									width='28'
									height='28'
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
