import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setLockCircle } from '../../../src/store/actions/circleOfFifths';
import { SET_LOCK_CIRCLE } from '../../../src/store/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Circle of fifths actions', () => {
	it('should change the lock status', () => {
		const store = mockStore({});
		store.dispatch(setLockCircle(true));
		expect(store.getActions()).toEqual([
			{
				type: SET_LOCK_CIRCLE,
				payload: true
			}
		]);
	});
});
