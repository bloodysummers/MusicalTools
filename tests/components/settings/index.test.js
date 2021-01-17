import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Settings from '../../../src/components/settings';
import KittenBase from '../../kittenBase';
import reducer from '../../../src/store/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('Settings', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('Matches snapshot', () => {
		const store = mockStore({
			settings: {
				notationType: 'C',
				instrumentSound: false
			}
		});
		const { toJSON } = render(
			<Provider store={store}>
				<KittenBase>
					<Settings />
				</KittenBase>
			</Provider>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Changes type notation', () => {
		const store = createStore(reducer, compose(applyMiddleware(thunk)));
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Settings />
				</KittenBase>
			</Provider>
		);

		const cButton = getByA11yLabel('C');
		const doButton = getByA11yLabel('Do');

		expect(cButton.props.accessibilityState.selected).toBe(true);
		expect(doButton.props.accessibilityState.selected).toBe(false);

		fireEvent.press(doButton);

		expect(cButton.props.accessibilityState.selected).toBe(false);
		expect(doButton.props.accessibilityState.selected).toBe(true);
	});

	it('Changes instrument sound', () => {
		const store = createStore(reducer, compose(applyMiddleware(thunk)));
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Settings />
				</KittenBase>
			</Provider>
		);

		const soundButton = getByA11yLabel('Sound');

		expect(soundButton.props.accessibilityState.selected).toBe(true);

		fireEvent.press(soundButton);

		expect(soundButton.props.accessibilityState.selected).toBe(false);

		fireEvent.press(soundButton);

		expect(soundButton.props.accessibilityState.selected).toBe(true);
	});
});
