module.exports = {
	env: {
		es2021: true,
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended', 
		'plugin:react/recommended'
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-multi-spaces': ['error'],
		'no-var': ['error'],
		'react/prop-types': 0
	},
}
