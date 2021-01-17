module.exports = {
	env: {
		node: true,
		es2021: true,
		jest: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				jsxBracketSameLine: true,
				singleQuote: true,
				trailingComma: 'none',
				printWidth: 80,
				useTabs: true,
				arrowParens: 'avoid',
				endOfLine: 'auto'
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
