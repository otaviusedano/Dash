/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			"laptop": "1024px",
			"desktop": "1440px",
			"big-desktop": "1680px",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"go-infinite": "15s slide infinite linear"
			},
			keyframes: {
				slide: {
					"from": {
						"transform": "translateX(0)"
					},
					"to": {
						"transform": "translateX(100%)"
					}
				}
			}
		},
	},
	plugins: [],
}
