module.exports = {
	parser: '@babel/eslint-parser',
	ignorePatterns: 'dist/**',
	env:{
		es6:true,
		node:true,
		browser:true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	settings:{
		react:{
			version:'detect',
		},
	},
	rules: {
		indent: [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'never',
		],
		'comma-dangle':[
			'error',
			'always',
		],
	},
}
