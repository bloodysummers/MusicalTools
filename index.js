/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { name as appName } from './app.json';
import reducers from './src/store/reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const persistedStore = persistStore(store);

const ReduxApp = () => (
	<Provider store={store}>
		<PersistGate
			persistor={persistedStore}
			loading={null}
			onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 2000))}>
			<App />
		</PersistGate>
	</Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
