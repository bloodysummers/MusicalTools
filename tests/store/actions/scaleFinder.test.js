import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setScaleType } from '../../../src/store/actions/scaleFinder';
import { SET_SCALE_TYPES } from '../../../src/store/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Scale finder actions', () => {
	it('should change the list of scale types', () => {
		const store = mockStore({
			scaleFinder: {
				scaleTypes: {
					regular: true
				}
			}
		});
		store.dispatch(setScaleType({ modes: true }));
		expect(store.getActions()).toEqual([
			{
				type: SET_SCALE_TYPES,
				payload: {
					regular: true,
					modes: true
				}
			}
		]);
	});
});
