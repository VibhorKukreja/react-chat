 

import { createStore, combineReducers,compose } from 'redux';
import { messages }from '../reducer/messagesReducer';

 
const store = createStore(combineReducers({
    messagesData:messages
}));

export default store;

 