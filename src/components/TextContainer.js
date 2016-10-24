 
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import socket from '../socket/socket';
;

export default class TextContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:''
        };
       /*
            We have to bind all handler method in es6 supported code.
       */
       this.onChange = this.onChange.bind(this);
       this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        this.refs.msg.focus();
    }

    render(){
       let props = this.props;
        return (<div className="text-box">
                  <input type="text" value={this.state.msg} ref="msg"  onChange={this.onChange} placeholder="" onKeyPress={this.sendMessage}/>
                </div>
              );
    }

   onChange(e){
       this.setState({msg:e.target.value});
    }

    sendMessage(event) {
        
        if (event.which !== 13) return;
        if(!!this.state.msg.trim()) socket.emit('new-message', {message: this.state.msg, userID: socket.id, time: new Date()});
        this.setState({msg:''});
    }
}