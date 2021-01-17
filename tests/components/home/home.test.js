import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../../src/components/home';
import KittenBase from '../../kittenBase';

jest.mock('@react-navigation/native');
jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock');
	Reanimated.default.call = () => {};
	return Reanimated;
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Home', () => {
	it('Matches snapshot', () => {
		const { toJSON } = render(
			<KittenBase>
				<Home />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});
