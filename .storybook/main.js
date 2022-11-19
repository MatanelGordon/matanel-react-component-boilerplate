/** @type {import('@storybook/react/types').StorybookConfig} */
module.exports = {
	typescript: {
		reactDocgen: false,
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	features: {
		previewMdx2: true,
		storyStoreV7: true,
	},
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal(config) {
		return {
			...config,
			module: {
				...config.module,
				rules: [
					...config.module.rules,
					{
						test: /\.s[ca]ss$/,
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: {
									modules: {
										auto: true,
									},
								},
							},
							{
								loader: 'postcss-loader',
								options: {
									implementation: require('postcss'),
								},
							},
							{
								loader: 'sass-loader',
								options: {
									implementation: require('sass'),
								},
							},
						],
					},
				],
			},
		};
	},
};
