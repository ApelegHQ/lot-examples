/* Copyright © 2021 Apeleg Limited.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: { node: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
			{
				selector: 'enumMember',
				format: ['UPPER_CASE'],
			},
			{
				selector: 'variable',
				modifiers: ['exported'],
				format: ['camelCase', 'PascalCase'],
			},
			{
				selector: 'typeProperty',
				format: ['camelCase'],
			},
			{
				selector: 'method',
				format: ['camelCase'],
			},
		],
	},
	overrides: [
		{
			files: ['*.js', '*.schema.json', 'package.json', '*.d.ts'],
			rules: {
				'@typescript-eslint/naming-convention': 'off',
			},
		},
		{
			files: ['*.json', 'closure-externs.js'],
			rules: {
				'@typescript-eslint/no-unused-expressions': 'off',
			},
		},
		{
			files: ['*.cjs', '*.cts'],
			rules: {
				'@typescript-eslint/no-require-imports': 'off',
			},
		},
	],
};
