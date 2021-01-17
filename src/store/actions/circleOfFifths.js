import { SET_LOCK_CIRCLE } from '../actionTypes';

export const setLockCircle = value => dispatch => {
	dispatch({ type: SET_LOCK_CIRCLE, payload: value });
};
