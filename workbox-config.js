module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{mp3,jpeg,jpg,css,js,png,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};