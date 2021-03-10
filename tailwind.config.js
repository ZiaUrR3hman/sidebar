module.exports = {
	purge:
		process.env.NODE_ENV === 'development'
			? []
			: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			borderWidth: ['hover', 'focus'],
			transform: ['hover'],
		},
	},
	plugins: [],
};
