import { SET_NOTATION_TYPE, SET_INSTRUMENT_SOUND } from '../actionTypes';

const INITIAL_STATE = {
	notationType: 'C',
	instrumentSound: true
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SET_NOTATION_TYPE:
			return { ...state, notationType: payload };
		case SET_INSTRUMENT_SOUND:
			return { ...state, instrumentSound: payload };
		default:
			return state;
	}
};
