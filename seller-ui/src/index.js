import React from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux stuff
import {Provider} from 'react-redux';

import {store,persistor} from './Redux/store';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
        
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();