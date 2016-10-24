"use strict";
import React from 'react';
import MessageContainer from './MessageContainer';
import TextArea from './TextContainer';
const App =(props) => {
    return (
	    	<div className='center'>
		         <MessageContainer/>
		         <TextArea/>
	         </div>
         );
};

export default App;
