import { SET_NOTATION_TYPE, SET_INSTRUMENT_SOUND } from '../actionTypes';

export const setNotationType = value => dispatch => {
    dispatch({ type: SET_NOTATION_TYPE, payload: value });
};

export const setInstrumentSound = value => dispatch => {
    dispatch({ type: SET_INSTRUMENT_SOUND, payload: value });
};