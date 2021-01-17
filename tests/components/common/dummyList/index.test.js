import React from 'react';
import { render } from '@testing-library/react-native';
import DummyList from '../../../../src/components/common/dummyList';
import KittenBase from '../../../kittenBase';

jest.mock(
	'../../../../src/components/common/dummyList/dummyItem/helper.js',
	() => ({
		randomBetween: () => 100
	})
);

describe('DummyList', () => {
	it('Matches snapshot', () => {
		const { toJSON } = render(
			<KittenBase>
				<DummyList count={3} />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});
