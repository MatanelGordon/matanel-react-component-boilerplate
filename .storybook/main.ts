// import { StorybookConfig } from '@storybook/react/types';
//
// export default {
// 	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
// 	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
// 	framework: '@storybook/react',
// 	features: {
// 		previewMdx2: true
// 	},
// 	core: {
// 		builder: '@storybook/builder-webpack5',
// 	},
// } as StorybookConfig;

module.exports = {
	typescript: {},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	features: {
		previewMdx2: true,
	},
	core: {
		builder: '@storybook/builder-webpack5',
	},
}
