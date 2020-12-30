const INITIAL_STATE = {
    notation_type: 'C',
    instrument_sound: 'on'
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        default:
            return state;
    }
};