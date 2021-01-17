import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingIndicator from '../../../../src/components/common/loadingIndicator';
import KittenBase from '../../../kittenBase';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Loading Indicator', () => {
	it('Matches snapshot - default', () => {
		const { toJSON } = render(
			<KittenBase>
				<LoadingIndicator />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Matches snapshot - another appearance', () => {
		const { toJSON } = render(
			<KittenBase>
				<LoadingIndicator status="basic" />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});
