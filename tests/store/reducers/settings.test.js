import reducer from '../../../src/store/reducers/settings';
import {
	SET_NOTATION_TYPE,
	SET_INSTRUMENT_SOUND
} from '../../../src/store/actionTypes';

describe('Settings reducer', () => {
	it('Should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			notationType: 'C',
			instrumentSound: true
		});
	});

	it('Should handle SET_NOTATION_TYPE', () => {
		expect(
			reducer(undefined, {
				type: SET_NOTATION_TYPE,
				payload: 'Do'
			})
		).toEqual({
			notationType: 'Do',
			instrumentSound: true
		});

		expect(
			reducer(undefined, {
				type: SET_NOTATION_TYPE,
				payload: 'None'
			})
		).toEqual({
			notationType: 'None',
			instrumentSound: true
		});
	});

	it('Should handle SET_INSTRUMENT_SOUND', () => {
		expect(
			reducer(undefined, {
				type: SET_INSTRUMENT_SOUND,
				payload: false
			})
		).toEqual({
			notationType: 'C',
			instrumentSound: false
		});
	});
});
