import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
	setNotationType,
	setInstrumentSound
} from '../../../src/store/actions/settings';
import {
	SET_NOTATION_TYPE,
	SET_INSTRUMENT_SOUND
} from '../../../src/store/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Settings actions', () => {
	it('should change the notation type', () => {
		const store = mockStore({
			settings: {
				notationType: 'C'
			}
		});
		store.dispatch(setNotationType('Do'));
		expect(store.getActions()).toEqual([
			{
				type: SET_NOTATION_TYPE,
				payload: 'Do'
			}
		]);
	});

	it('should change the instrument sound state', () => {
		const store = mockStore({});
		store.dispatch(setInstrumentSound(false));
		expect(store.getActions()).toEqual([
			{
				type: SET_INSTRUMENT_SOUND,
				payload: false
			}
		]);
	});
});
