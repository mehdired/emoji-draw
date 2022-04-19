import { defineConfig } from 'vite'

export default defineConfig({
	base: '/emoji-draw/',
	root: 'src',
	build: {
		outDir: '../dist',
	},
})
