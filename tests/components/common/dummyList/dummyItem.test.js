import React from 'react';
import { render } from '@testing-library/react-native';
import DummyItem from '../../../../src/components/common/DummyList/dummyItem';
import KittenBase from '../../../kittenBase';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock(
	'../../../../src/components/common/DummyList/dummyItem/helper.js',
	() => ({
		randomBetween: () => 100
	})
);

describe('DummyItem', () => {
	it('Matches snapshot', () => {
		const { toJSON } = render(
			<KittenBase>
				<DummyItem />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});
