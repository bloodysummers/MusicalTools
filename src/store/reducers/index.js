import { combineReducers } from 'redux';
import settings from './settings';
import scaleFinder from './scaleFinder';
import circleOfFifths from './circleOfFifths';

const rootReducer = combineReducers({
    settings,
    scaleFinder,
    circleOfFifths
});

export default rootReducer;