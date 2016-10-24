"use strict";
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import socket  from '../socket/socket';



class MessageContainer extends Component{

    componentDidUpdate() {

        let elm = ReactDOM.findDOMNode(this.refs.chatView);
        elm.scrollTop = elm.scrollHeight - elm.clientHeight;
    }

    render(){
        let { messages } = this.props;
        return (
            <div className="main-container">
                <h3>Chat room</h3>
            <div className="chat-view" ref="chatView">

            { messages.map((_message, i) =>
                <div key={i} className={_message.userID === socket.id ? "right chat-row" : "chat-row"}>
                    <div className="msg-container">
                        <p className="msg">
                            {_message.message}
                        </p>
                    
                        <div className="time">{moment(_message.time).format('h:mm a')}</div> 
                        
                    </div>
                </div>
            )}
        </div></div>
        );
    }
}

function mapStateToProps(state){
 
    return{
	messages:state.messagesData
   }
}

export default connect(mapStateToProps)(MessageContainer);
 
