module.exports = {
	parser: '@babel/eslint-parser',
	ignorePatterns:'dist/**',
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
		]
	}
}