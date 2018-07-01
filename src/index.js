import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from "./reducers/index.js";

ReactDOM.render(
	<Provider store={configureStore().store}>
		<PersistGate loading={null} persistor={configureStore().persistor}>
			<App />
		</PersistGate>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();