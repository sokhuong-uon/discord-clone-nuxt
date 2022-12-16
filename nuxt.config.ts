// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	runtimeConfig: {
		public: {
			apiBase: 'https://go-vercel-serverless-seven.vercel.app/api',
		},
	},
})
