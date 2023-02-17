import { useSession, signIn, signOut } from 'next-auth/react'

import styles from '@/styles/navbar.module.css'

export default function Navbar() {
	const { data: session, status } = useSession()

	return (
		<header className={styles.signedInStatus}>
			<div className={styles.loaded}>
				{status === 'authenticated' ? (
					<>
						<span>{session.user?.name ?? session.user?.email}</span>
						<button onClick={() => signOut()}>Sign Out</button>
					</>
				) : (
					<button onClick={() => signIn()}>Login</button>
				)}
			</div>
		</header>
	)
}
