/**
 * Created by Vibhor on 23/10/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './components/App';
import ChatView from './components/ChatView';
import TextArea from './components/TextArea';

store.subscribe(() => {
    "use strict";
    console.log(store.getState());
    run();
});

function run() {
    "use strict";
    let state = store.getState();
    ReactDOM.render(<App>
        <ChatView messages={state.messages}/>
        <TextArea/>
    </App>, document.getElementById('root'));
}
run();
