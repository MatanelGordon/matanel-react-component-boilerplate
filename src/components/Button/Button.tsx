import { FC } from 'react';

export interface ButtonProps {
	size: 'sm' | 'md' | 'lg';
	background: string;
	color: string;
	label: string;
}

export const Button: FC<ButtonProps> = (props) => {
	return (
		<button>
			<i aria-hidden="true" className="button-bg" />
			{props.label}
		</button>
	);
};
