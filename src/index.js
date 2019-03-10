import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App  from './App';


const history = createBrowserHistory();
const {
    store
  } = configureStore(history);

console.log(store)
  render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
