import { combineReducers } from 'redux';
import settings from './settings';
import scaleFinder from './scaleFinder';

const rootReducer = combineReducers({
    settings,
    scaleFinder
});

export default rootReducer;