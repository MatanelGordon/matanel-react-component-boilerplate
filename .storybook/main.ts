import { merge } from 'webpack-merge';
import webpackProd from '../webpack.config';
import { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration, container } from 'webpack';
const { ModuleFederationPlugin, ContainerPlugin, ContainerReferencePlugin } = container;

const forbiddenPlugins = [ModuleFederationPlugin, ContainerPlugin, ContainerReferencePlugin];

let webpackConfig: Configuration;

if (Array.isArray(webpackProd)) {
	webpackConfig = webpackProd[0];
} else {
	webpackConfig = webpackProd as Configuration;
}

export default {
	typescript: {
		reactDocgen: false,
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				lazyCompilation: true,
				fsCache: true,
			},
			strictMode: true,
		},
	},
	features: {
		storyStoreV7: true,
	},
	webpackFinal(config) {
		return merge(config, {
			module: webpackConfig.module,
			plugins: webpackConfig.plugins?.filter(
				(plugin) => !forbiddenPlugins.some((other) => plugin instanceof other)
			),
		});
	},
	docs: {
		autodocs: true,
	},
} satisfies StorybookConfig;
