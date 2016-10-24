/**
 * Created by Vibhor on 23/10/16.
 */

import * as Redux from 'redux';
import { messages } from './reducers';

const store = Redux.createStore(Redux.combineReducers({
    messages: messages
}));

export default store;