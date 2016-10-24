import React from 'react';

import ChatView from './ChatView';
import TextArea from './TextArea';

const App = (props) => {
    "use strict";
    return (<div className='center'>
        <ChatView/>
        <TextArea/>
    </div>);
};

export default App;