/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Toast from 'react-native-toast-message';

import App from './App';
import {name as appName} from './app.json';
import reducers from './src/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

const ReduxApp = () => (
    <Provider store={createStoreWithMiddleware}>
        <App />
        <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
