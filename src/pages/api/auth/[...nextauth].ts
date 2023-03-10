import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	theme: {
		brandColor: '#e7736e',
		buttonText: '#000000',
	},
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID as string,
			clientSecret: process.env.FACEBOOK_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
})
