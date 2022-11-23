import { FC } from 'react';
import { getVariantClassName } from './utils';
import styles from './Button.module.scss';

export interface ButtonProps {
	size: 'sm' | 'md' | 'lg';
	background: string;
	color: string;
	label: string;
	mode: 'dark' | 'light';
}

export const Button: FC<ButtonProps> = (props) => {
	return (
		<button
			style={{ backgroundColor: props.background, color: props.color }}
			className={`${styles['button']} ${styles[props.mode]} ${getVariantClassName(props.size)}`}
		>
			<i aria-hidden="true" className={styles['button-bg']} />
			{props.label}
		</button>
	);
};
