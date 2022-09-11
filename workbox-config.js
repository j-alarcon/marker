module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{mp3,css,ttf,yml,png,svg,webp,html,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};