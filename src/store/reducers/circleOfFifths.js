import { SET_LOCK_CIRCLE } from '../actionTypes';

const INITIAL_STATE = {
    lockCircle: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case SET_LOCK_CIRCLE:
            return {...state, lockCircle: payload};
        default:
            return state;
    }
};