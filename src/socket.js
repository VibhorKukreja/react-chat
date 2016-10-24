/**
 * Created by Vibhor on 23/10/16.
 */

import store from './store';
import { addMessage } from './actions';

const socket = io('localhost:8080');
socket.on('append-message', function (data) {
    store.dispatch(addMessage(data));
});

export default socket;