import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<Head>
				<title>Sentire a colori</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</SessionProvider>
	)
}
