import { reducer as formReducer } from 'redux-form';
import { routerReducer} from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';


import rootSaga from '../sagas';
import { adminPage } from './admin.reducer.js';


const reducer = combineReducers({
    routing: routerReducer, adminPage,
    form: formReducer
});

export default function configureStore(history, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    createRouterMiddleware(history)
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
  );
  
  sagaMiddleware.run(rootSaga);
  return { store };
}