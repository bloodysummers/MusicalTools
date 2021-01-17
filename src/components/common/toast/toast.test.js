import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Toast from './';

test('form submits two answers', () => {
	const hide = jest.fn();

	const { getByTestId } = render(
		<Toast text1="Text1" text2="Text2" hide={hide} type="success" />
	);

	fireEvent.press(getByTestId('closeButton'));

	expect(hide).toBeCalled({
		1: { q: 'q1', a: 'a1' },
		2: { q: 'q2', a: 'a2' }
	});
});
