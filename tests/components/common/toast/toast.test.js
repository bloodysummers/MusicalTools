import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Toast from '../../../../src/components/common/toast';
import KittenBase from '../../../kittenBase';

describe('Toast', () => {
	it('Matches snapshot', () => {
		const hide = jest.fn();

		const { toJSON } = render(
			<KittenBase>
				<Toast text1="Text1" text2="Text2" hide={hide} type="success" />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Hides on click', () => {
		const hide = jest.fn();

		const { getByA11yLabel } = render(
			<KittenBase>
				<Toast text1="Text1" text2="Text2" hide={hide} type="success" />
			</KittenBase>
		);
		expect(hide).not.toBeCalled();
		const closeButton = getByA11yLabel('Close');
		fireEvent.press(closeButton);
		expect(hide).toBeCalled();
	});
});
