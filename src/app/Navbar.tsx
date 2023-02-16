'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

import styles from '@/styles/navbar.module.css'

export default function Navbar() {
	const { data: session } = useSession()

	return (
		<header className={styles.signedInStatus}>
			<div className={styles.loaded}>
				{session?.user ? (
					<>
						{session.user.image && (
							<span
								style={{ backgroundImage: `url('${session.user.image}')` }}
								className={styles.avatar}
							/>
						)}
						<span className={styles.signedInText}>
							<small>Signed in as</small>
							<br />
							<strong>{session.user.email ?? session.user.name}</strong>
						</span>
						<br />
						<button onClick={() => signOut()}>Sign Out</button>
					</>
				) : (
					<>
						<span className={styles.notSignedInText}>
							You are not signed in
						</span>
						<br />
						<button onClick={() => signIn()}>Login</button>
					</>
				)}
			</div>
		</header>
	)
}
