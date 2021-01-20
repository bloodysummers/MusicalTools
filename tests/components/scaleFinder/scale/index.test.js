import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import {
	render,
	waitForElementToBeRemoved,
	waitFor,
	fireEvent
} from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { useNavigation, useRoute } from '@react-navigation/native';
import Scale from '../../../../src/components/ScaleFinder/scale';
import KittenBase from '../../../kittenBase';
import { majorScales } from '../../../../src/utils/scales';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock(
	'../../../../src/components/common/dummyList/dummyItem/helper.js',
	() => ({
		randomBetween: () => 100
	})
);
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
jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: jest.fn(),
	useRoute: jest.fn()
}));

const mockedNavigate = jest.fn();
useNavigation.mockImplementation(() => ({
	navigate: mockedNavigate,
	setOptions: jest.fn()
}));
const dMajorScale = majorScales[2];
useRoute.mockImplementation(() => ({
	params: {
		scale: dMajorScale
	}
}));

describe('Scale', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('Matches snapshot', async () => {
		const store = mockStore({
			settings: { notationType: 'C' }
		});
		const { toJSON, getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Scale />
				</KittenBase>
			</Provider>
		);
		await waitForElementToBeRemoved(() => getByA11yLabel('Loading'));
		expect(toJSON()).toMatchSnapshot();
	});

	it('It shows all the available chords', async () => {
		const store = mockStore({
			settings: { notationType: 'C' }
		});
		const { queryAllByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Scale />
				</KittenBase>
			</Provider>
		);
		const chords = await waitFor(() => queryAllByA11yLabel('try'));
		expect(chords.length).toBe(111);
	});

	it('Navigates to chord', async () => {
		const store = mockStore({
			settings: { notationType: 'C' }
		});
		const { queryAllByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Scale />
				</KittenBase>
			</Provider>
		);
		const chords = await waitFor(() => queryAllByA11yLabel('try'));
		fireEvent.press(chords[0]);
		expect(mockedNavigate).toBe(111);
	});
});
