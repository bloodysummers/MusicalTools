import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Chord } from '@tonaljs/tonal';
import { useNavigation, useRoute } from '@react-navigation/native';
import ChordScreen from '../../../../../src/components/ScaleFinder/scale/chord';
import KittenBase from '../../../../kittenBase';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

const chord = Chord.getChord('major', 'C');
chord.nameToDisplay = 'CM';
chord.findBy = chord.notes;
useRoute.mockImplementation(() => ({
	params: {
		scale: chord
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
		const { toJSON } = render(
			<Provider store={store}>
				<KittenBase>
					<ChordScreen />
				</KittenBase>
			</Provider>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Plays chord', async () => {
		const store = mockStore({
			settings: { notationType: 'C' }
		});
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<ChordScreen />
				</KittenBase>
			</Provider>
		);
		const chordButton = getByA11yLabel('playChord');
		fireEvent.press(chordButton);
		expect(mockPlay).toHaveBeenCalledTimes(3);
	});

	it('Plays arpeggio', async () => {
		const store = mockStore({
			settings: { notationType: 'C' }
		});
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<ChordScreen />
				</KittenBase>
			</Provider>
		);
		const chordButton = getByA11yLabel('playArpeggio');
		fireEvent.press(chordButton);
		waitFor(() => expect(mockPlay).toHaveBeenCalledTimes(3));
	});
});
