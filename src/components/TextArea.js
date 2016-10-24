/**
 * Created by Vibhor on 23/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import socket  from './../socket';

const TextArea = React.createClass({
    componentDidMount() {
        "use strict";
        let elm = ReactDOM.findDOMNode(this.refs.msg);
        elm.focus();
    },
    render() {
        "use strict";
        let props = this.props;
        return (<div className="text-box">
            <input type="text" ref="msg" placeholder="" onKeyPress={this.sendMessage}/>
        </div>);
    },
    sendMessage(event) {
        "use strict";
        if (event.which !== 13) return;
        let msg = ReactDOM.findDOMNode(this.refs.msg).value;
        ReactDOM.findDOMNode(this.refs.msg).value = '';
        socket.emit('new-message', {message: msg, userID: socket.id, timestamp: +new Date()});
    }
});

export default TextArea;