import { SET_SCALE_TYPES } from '../actionTypes';

const INITIAL_STATE = {
    scaleTypes: {
        regular: true
    }
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case SET_SCALE_TYPES:
            return {...state, scaleTypes: payload};
        default:
            return state;
    }
};