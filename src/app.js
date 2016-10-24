/**
 * Created by Vibhor on 23/10/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './components/App';
import ChatView from './components/ChatView';
import TextArea from './components/TextArea';
import { Provider } from 'react-redux';


function run() {
    "use strict";
    ReactDOM.render(
        <Provider store={store}>
            <App>
                <ChatView/>
                <TextArea/>
            </App>
        </Provider>
        , document.getElementById('root'));
}

run();
