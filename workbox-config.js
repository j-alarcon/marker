module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{mp3,css,ttf,yml,webp,svg,png,html,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};