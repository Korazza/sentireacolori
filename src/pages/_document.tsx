import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='it'>
			<Head>
				{/*<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />*/}
				<meta name='description' content='' />
				<meta name='keywords' content='' />
				{/*<meta name='robots' content='index, nofollow' />*/}
				<meta charSet='UTF-8' />
				<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='theme-color'
					content='#4d65c8'
					media='(prefers-color-scheme: light)'
				/>
				<meta
					name='theme-color'
					content='#4d65c8'
					media='(prefers-color-scheme: dark)'
				/>
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
