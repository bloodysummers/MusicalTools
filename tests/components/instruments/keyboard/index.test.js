import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Keyboard from '../../../../src/components/instruments/keyboard';
import KittenBase from '../../../kittenBase';
import { majorScales } from '../../../../src/utils/scales';

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

describe('Keyboard', () => {
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
					<Keyboard allow />
				</KittenBase>
			</Provider>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Matches snapshot - with scale', () => {
		const store = mockStore({
			settings: {
				notationType: 'C',
				instrumentSound: false
			}
		});
		const dMajorScale = majorScales[2];
		const { toJSON } = render(
			<Provider store={store}>
				<KittenBase>
					<Keyboard scale={dMajorScale} />
				</KittenBase>
			</Provider>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Matches snapshot - latin notation', () => {
		const store = mockStore({
			settings: {
				notationType: 'Do',
				instrumentSound: false
			}
		});
		const { toJSON } = render(
			<Provider store={store}>
				<KittenBase>
					<Keyboard allow />
				</KittenBase>
			</Provider>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Calls the onPress function', () => {
		const store = mockStore({
			settings: {
				notationType: 'C',
				instrumentSound: false
			}
		});
		const onPress = jest.fn();
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Keyboard onPress={onPress} allow />
				</KittenBase>
			</Provider>
		);
		const cKey = getByA11yLabel('C');
		const fKey = getByA11yLabel('F');
		const gsKey = getByA11yLabel('G#');

		fireEvent(cKey, 'pressIn');
		fireEvent(fKey, 'pressIn');
		fireEvent(gsKey, 'pressIn');

		expect(onPress).toBeCalledWith('C');
		expect(onPress).toBeCalledWith('F');
		expect(onPress).toBeCalledWith('G#');
	});

	it('Disables unallowed keys', () => {
		const store = mockStore({
			settings: {
				notationType: 'C',
				instrumentSound: false
			}
		});
		const onPress = jest.fn();

		const dMajorScale = majorScales[2];
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Keyboard scale={dMajorScale} onPress={onPress} allow={false} />
				</KittenBase>
			</Provider>
		);
		const cKey = getByA11yLabel('C');
		const csKey = getByA11yLabel('C#');
		const dKey = getByA11yLabel('D');
		const dsKey = getByA11yLabel('D#');

		expect(cKey.props.accessibilityState.disabled).toBe(true);
		expect(csKey.props.accessibilityState.disabled).toBe(false);
		expect(dKey.props.accessibilityState.disabled).toBe(false);
		expect(dsKey.props.accessibilityState.disabled).toBe(true);
	});

	it('Plays a sound', () => {
		const store = mockStore({
			settings: {
				notationType: 'C',
				instrumentSound: true
			}
		});
		const onPress = jest.fn();
		const { getByA11yLabel } = render(
			<Provider store={store}>
				<KittenBase>
					<Keyboard onPress={onPress} allow />
				</KittenBase>
			</Provider>
		);
		const cKey = getByA11yLabel('C');

		fireEvent(cKey, 'pressIn');

		expect(onPress).toBeCalledWith('C');
		expect(mockPlay).toBeCalled();
		expect(mockStop).toBeCalled();
	});
});
