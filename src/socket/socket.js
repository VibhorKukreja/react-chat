 
import store from '../store/configureStore';
import { addMessage } from '../actions/actions';


const socket = io('localhost:8080');
socket.on('append-message', function (data) {
	
    store.dispatch(addMessage(data));
});

export default socket;
