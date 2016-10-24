import React from 'react';

const App = (props) => {
    "use strict";
    return (<div className='center'>
        {props.children}
    </div>);
};

export default App;