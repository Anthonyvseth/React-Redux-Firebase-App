import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore} from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(
  rootReducer,
  compose(
   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
   reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
   reduxFirestore(fbConfig)
 )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
