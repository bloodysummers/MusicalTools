import { SET_SCALE_TYPES } from '../actionTypes';

export const setScaleType = value => (dispatch, getState) => {
	const state = getState();
	const { scaleTypes } = state.scaleFinder;
	dispatch({ type: SET_SCALE_TYPES, payload: { ...scaleTypes, ...value } });
};
