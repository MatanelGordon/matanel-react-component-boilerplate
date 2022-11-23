import { ButtonProps } from './Button';
import styles from './Button.module.scss';

export const getVariantClassName = (variant: ButtonProps['size']) => {
	return styles[`button-${variant}`];
};
