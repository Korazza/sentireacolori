import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'

import styles from '@/styles/Home.module.css'

export default function Home() {
	const { data: session } = useSession()

	return (
		<>
			<Head>
				<title>Sentire a colori</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div>
					<p>
						Get started by editing&nbsp;
						<code>src/pages/index.tsx</code>
					</p>
					{session === null ? (
						<button onClick={() => signIn()}>Login</button>
					) : (
						<button onClick={() => signOut()}>Sign out</button>
					)}
				</div>
			</main>
		</>
	)
}
