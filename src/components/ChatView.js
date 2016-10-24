
import React from 'react';
import ReactDOM from 'react-dom';
import socket  from './../socket';
import { connect } from 'react-redux';

const mapStateToProps = ({ messages }) => ({
    messages
});

const ChatView = React.createClass({
    componentDidUpdate() {
        "use strict";
        let elm = ReactDOM.findDOMNode(this.refs.chatView);
        elm.scrollTop = elm.scrollHeight - elm.clientHeight;
    },
    render() {
        "use strict";
        let props = this.props;
        return (<div className="chat-view" ref="chatView">
            <h3>Public chat room</h3>
            {props.messages.map((_message, i) =>
                <div key={i}>
                        <span className={_message.userID != socket.id ? "left" : "right"}>
                            {_message.message}
                        </span>
                    <div className="clear"></div>
                </div>
            )}
        </div>);
    }
});

export default connect(mapStateToProps)(ChatView);