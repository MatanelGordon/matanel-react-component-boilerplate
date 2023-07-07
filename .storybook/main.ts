import { merge } from 'webpack-merge';
import webpackProd from '../webpack.config';
import { StorybookConfig } from '@storybook/react-webpack5';

export default {
	typescript: {
		reactDocgen: false,
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				lazyCompilation: true,
				fsCache: true,
			},
		},
	},
	features: {
		storyStoreV7: true,
	},
	webpackFinal(config) {
		return merge(config, {
			module: webpackProd.module,
			plugins: webpackProd.plugins,
		});
	},
	docs: {
		autodocs: true,
	},
} satisfies StorybookConfig;
