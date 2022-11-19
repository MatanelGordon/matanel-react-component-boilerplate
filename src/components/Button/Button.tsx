import { FC } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
	size: 'sm' | 'md' | 'lg';
	background: string;
	color: string;
	label: string;
}

export const Button: FC<ButtonProps> = (props) => {
	return (
		<button className={styles['button']}>
			<i aria-hidden="true" className={styles['buttonBg']} />
			{props.label}
		</button>
	);
};
