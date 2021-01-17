import reducer from '../../../src/store/reducers/scaleFinder';
import { SET_SCALE_TYPES } from '../../../src/store/actionTypes';

describe('Scale finder reducer', () => {
	it('Should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			scaleTypes: {
				regular: true
			}
		});
	});

	it('Should handle SET_SCALE_TYPES', () => {
		expect(
			reducer(undefined, {
				type: SET_SCALE_TYPES,
				payload: {
					regular: true,
					modes: true
				}
			})
		).toEqual({
			scaleTypes: {
				regular: true,
				modes: true
			}
		});

		expect(
			reducer(undefined, {
				type: SET_SCALE_TYPES,
				payload: {
					regular: false,
					modes: true
				}
			})
		).toEqual({
			scaleTypes: {
				regular: false,
				modes: true
			}
		});
	});
});
