import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import rootReducer from './reducers/index';

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet,
	whitelist: ['favorites']
}

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {

	let store = createStore(
		persistedReducer,
		applyMiddleware(...middlewares)
	);
	let persistor = persistStore(store)	

	return { store, persistor };
}