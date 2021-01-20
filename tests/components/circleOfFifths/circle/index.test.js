import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Circle from '../../../../src/components/circleOfFifths/circle';
import KittenBase from '../../../kittenBase';

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

describe('Settings', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('Matches snapshot', async () => {
		const store = mockStore({
			settings: {
				notationType: 'C',
				instrumentSound: false
			}
		});
		const { toJSON } = render(
			<Provider store={store}>
				<KittenBase>
					<Circle lock={false} currentKey={0} />
				</KittenBase>
			</Provider>
		);
		await waitFor(() => expect(toJSON()).toMatchSnapshot());
	});
});
