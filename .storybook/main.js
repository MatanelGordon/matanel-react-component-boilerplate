const mergeConfigs = require('webpack-merge');
const webpackProdModule = require('../webpack.config').module;

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
		builder: {
			name: '@storybook/builder-webpack5',
			options: {
				lazyCompilation: true,
				fsCache: true,
			},
		},
	},
	webpackFinal(config) {
		return mergeConfigs.merge(config, { module: webpackProdModule });
	},
};
