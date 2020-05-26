import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/Reducers/RootReducer'
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbconfig from './config/fbconfig'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { createFirestoreInstance,reduxFirestore } from 'redux-firestore';


firebase.initializeApp(fbconfig)
firebase.firestore()

const store = createStore(RootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase})),reduxFirestore(firebase,fbconfig)))

const rrfConfig = {
  userProfile : 'users',
  useFirestoreForProfile : true
}

const rrfProps = {
  firebase,
  config:rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(

    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>    
    </Provider>
    
  ,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
