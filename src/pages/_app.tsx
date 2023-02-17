import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Poppins } from '@next/font/google'

import '@/styles/globals.css'

const poppins = Poppins({
	weight: ['400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

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
			<style jsx global>{`
				* {
					font-family: ${poppins.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</SessionProvider>
	)
}
