import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import firebase from 'firebase/app'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(
  rootReducer,
  compose(
   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
   reduxFirestore(fbConfig)
 )
);

const rrfProps = {
firebase,
config: fbConfig,
dispatch: store.dispatch,
createFirestoreInstance 
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
