import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../../../src/components/home';
import KittenBase from '../../kittenBase';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
	return {
		...jest.requireActual('@react-navigation/native'),
		useNavigation: () => ({
			navigate: mockedNavigate
		})
	};
});
jest.mock('react-i18next', () => ({
	useTranslation: () => {
		return {
			t: str => str,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
				language: 'en'
			}
		};
	}
}));
const mockedOpenURL = jest.fn();
jest.mock('react-native/Libraries/Linking/Linking', () => ({
	openURL: mockedOpenURL
}));

describe('Home', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('Matches snapshot', () => {
		const { toJSON } = render(
			<KittenBase>
				<Home />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Goto ScaleFinder', () => {
		const { getByText } = render(
			<KittenBase>
				<Home />
			</KittenBase>
		);
		const button = getByText('scaleFinder');
		fireEvent.press(button);
		expect(mockedNavigate).toBeCalledWith('ScaleFinderSection');
	});

	it('Goto CircleOfFifths', () => {
		const { getByText } = render(
			<KittenBase>
				<Home />
			</KittenBase>
		);
		const button = getByText('circleOfFifths');
		fireEvent.press(button);
		expect(mockedNavigate).toBeCalledWith('CircleSection');
	});

	it('Goto store', () => {
		const { getByText } = render(
			<KittenBase>
				<Home />
			</KittenBase>
		);
		const button = getByText('home:leaveComments');
		fireEvent.press(button);
		expect(mockedOpenURL).toBeCalledWith(
			'market://details?id=com.musicaltools'
		);
	});
});
