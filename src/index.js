import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './reducers/welcome';
import App from './containers/App';


const store = createStore(
	AppReducer,
	window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

