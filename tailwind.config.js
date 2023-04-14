/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		colors: {
			primary: {
				50: '#FEF4F0',
				100: '#FEE8E2',
				200: '#FCCEC0',
				300: '#FAB7A3',
				400: '#F99D81',
				500: '#F78361',
				600: '#F45120',
				700: '#C7360A',
				800: '#832407',
				900: '#441203',
				950: '#220902'
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
