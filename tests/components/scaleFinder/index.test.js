import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ScaleFinder from '../../../src/components/ScaleFinder';
import KittenBase from '../../kittenBase';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const defaultStore = {
	settings: {
		notationType: 'C',
		instrumentSound: false
	},
	scaleFinder: {
		scaleTypes: {
			regular: true
		}
	}
};

const mockPlay = jest.fn();
const mockStop = jest.fn();
jest.mock('react-native-sound', () => {
	let _filename = null;
	let _basePath = null;

	const SoundMocked = filename => {
		_filename = filename;
	};

	SoundMocked.prototype.filename = () => _filename;
	SoundMocked.prototype.basePath = () => _basePath;
	SoundMocked.prototype.play = cb => {
		mockPlay();
		cb();
	};
	SoundMocked.prototype.pause = function () {};
	SoundMocked.prototype.isPlaying = () => false;
	SoundMocked.prototype.stop = () => mockStop();
	SoundMocked.prototype.reset = function () {};
	SoundMocked.prototype.release = function () {};
	SoundMocked.prototype.getDuration = function () {};

	SoundMocked.LIBRARY = 2;

	return SoundMocked;
});
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
jest.mock('react-native-admob', () => ({
	AdMobBanner: () => null
}));

describe('ScaleFinder', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('Matches snapshot', () => {
		const store = mockStore(defaultStore);
		const { toJSON } = render(
			<Provider store={store}>
				<KittenBase>
					<ScaleFinder />
				</KittenBase>
			</Provider>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Toggles pressed keys', () => {
		const store = mockStore(defaultStore);
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<ScaleFinder />
				</KittenBase>
			</Provider>
		);
		const fKey = getByA11yLabel('F');
		const asKey = getByA11yLabel('A#');

		expect(fKey.props.accessibilityState.checked).toBe(false);
		expect(asKey.props.accessibilityState.checked).toBe(false);

		fireEvent(fKey, 'pressIn');
		fireEvent(asKey, 'pressIn');

		expect(fKey.props.accessibilityState.checked).toBe(true);
		expect(asKey.props.accessibilityState.checked).toBe(true);
	});

	it('Enables and disables Find and Clear buttons', () => {
		const store = mockStore(defaultStore);
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<ScaleFinder />
				</KittenBase>
			</Provider>
		);
		const findButton = getByA11yLabel('find');
		const clearButton = getByA11yLabel('clear');
		const cKey = getByA11yLabel('C');
		const fKey = getByA11yLabel('F');
		const asKey = getByA11yLabel('A#');

		expect(findButton.props.accessibilityState.disabled).toBe(true);
		expect(clearButton.props.accessibilityState.disabled).toBe(true);

		fireEvent(fKey, 'pressIn');

		expect(clearButton.props.accessibilityState.disabled).toBe(false);

		fireEvent(cKey, 'pressIn');
		fireEvent(asKey, 'pressIn');

		expect(findButton.props.accessibilityState.disabled).toBe(false);

		fireEvent.press(clearButton);

		expect(findButton.props.accessibilityState.disabled).toBe(true);
		expect(clearButton.props.accessibilityState.disabled).toBe(true);
	});

	it('Searches for results', async () => {
		const store = mockStore(defaultStore);
		const { getByA11yLabel, queryAllByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<ScaleFinder />
				</KittenBase>
			</Provider>
		);
		const findButton = getByA11yLabel('find');
		const cKey = getByA11yLabel('C');
		const fKey = getByA11yLabel('F');
		const asKey = getByA11yLabel('A#');

		fireEvent(fKey, 'pressIn');
		fireEvent(cKey, 'pressIn');
		fireEvent(asKey, 'pressIn');

		expect(findButton.props.accessibilityState.busy).toBe(false);

		fireEvent.press(findButton);

		expect(findButton.props.accessibilityState.busy).toBe(true);

		const tryButtons = await waitFor(() => queryAllByA11yLabel('try'));

		expect(tryButtons.length).toBe(15);
	});
});
