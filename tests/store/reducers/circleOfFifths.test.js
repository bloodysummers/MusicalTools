import reducer from '../../../src/store/reducers/circleOfFifths';
import { SET_LOCK_CIRCLE } from '../../../src/store/actionTypes';

describe('Scale finder reducer', () => {
	it('Should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			lockCircle: false
		});
	});

	it('Should handle SET_LOCK_CIRCLE', () => {
		expect(
			reducer(undefined, {
				type: SET_LOCK_CIRCLE,
				payload: true
			})
		).toEqual({
			lockCircle: true
		});
	});
});
