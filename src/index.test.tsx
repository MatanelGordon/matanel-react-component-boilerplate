import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './components/Button';

describe('vitest testing example', () => {
	it('should button have class button', () => {
		render(<Button size="lg" label="Test" background="#f00" color="white" />);
		expect(screen.getByText('Test')).toBeDefined();
	});
});