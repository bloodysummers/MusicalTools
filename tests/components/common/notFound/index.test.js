import React from 'react';
import { render } from '@testing-library/react-native';
import NotFound from '../../../../src/components/common/notFound';
import KittenBase from '../../../kittenBase';

describe('Not Found', () => {
	it('Matches snapshot - default', () => {
		const { toJSON } = render(
			<KittenBase>
				<NotFound>No results found</NotFound>
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});
