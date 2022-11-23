import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'radio' },
		},
		label: {
			control: { type: 'text' },
		},
		mode: {
			options: ['light', 'dark'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
	size: 'lg',
	label: 'Button',
	mode: 'dark',
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
	label: 'Button',
	mode: 'dark',
};
