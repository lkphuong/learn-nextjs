module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:react/jsx-runtime',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
	rules: {
		'prefer-const': 'error',
		'unused-imports/no-unused-imports': 'error',
		'no-use-before-define': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Package react related
					['^next'],
					// Package react related
					['^react'],
					// Other lib
					['^@?\\w'],
					// Internal package
					['^@(apis)(/.*|$)'],
					['^@(assets)(/.*|$)'],
					['^@(pages)(/.*|$)'],
					['^@(commons)(/.*|$)'],
					['^@(configs)(/.*|$)'],
					['^@(helpers)(/.*|$)'],
					['^@(utils)(/.*|$)'],
					['^@(modules)(/.*|$)'],
					['^@(types)(/.*|$)'],
					['^@(stores)(/.*|$)'],
					['^@(hooks)(/.*|$)'],
					['^@(/*)(/.*|$)'],
					// Styles import
					['^(@styles)(/.scss|$)'],
					// Parent import
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Same relative import
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
	},
	plugins: ['react', 'unused-imports', 'simple-import-sort'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.native.js'],
			},
			alias: {
				map: [
					['@', './src'],
					['@commons', './src/commons'],
					['@modules', './src/modules'],
					['@helpers', './src/helpers'],
					['@configs', './src/configs'],
					['@utils', './src/utils'],
					['@apis', './src/apis'],
					['@assets', './src/assets'],
					['@styles', './src/styles'],
					['@hooks', './src/hooks'],
					['@pages', './src/pages'],
					['@types', './src/types'],
					['@stores', './src/stores'],
				],
				extensions: ['.ts', '.tsx', '.js', '.tsx'],
			},
		},
	},
};
