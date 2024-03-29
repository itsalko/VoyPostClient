import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
); 

serviceWorker.unregister();
