import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Toast from './';

test('form submits two answers', () => {
	const hide = jest.fn();

	const { getAllByA11yLabel, getByText } = render(
		<Toast text1="Text1" text2="Text2" hide={hide} type="success" />
	);

	// const answerInputs = getAllByA11yLabel('answer input');

	fireEvent.press(getByText('Submit'));

	expect(hide).toBeCalled({
		1: { q: 'q1', a: 'a1' },
		2: { q: 'q2', a: 'a2' }
	});
});
