/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		colors: {
			primary: {
				50: '#FFF9F0',
				100: '#FFF3E0',
				200: '#FFE4BD',
				300: '#FFD89E',
				400: '#FFCC80',
				500: '#FFC05F',
				600: '#FFA31A',
				700: '#D17D00',
				800: '#8A5300',
				900: '#472B00',
				950: '#241500'
			},
			secondary: {
				50: '#E6E9EF',
				100: '#CDD3DF',
				200: '#99A4BD',
				300: '#67779D',
				400: '#444F6A',
				500: '#242A38',
				600: '#1C212B',
				700: '#161A22',
				800: '#0E1016',
				900: '#08090C',
				950: '#040506'
			}
		},
		extend: {}
	},
	plugins: []
};
