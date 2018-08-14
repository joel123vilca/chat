import React, { Component} from 'react';

class ChatRoom extends Component {
  constructor(){
    super();
    this.state = {
      message: '',
      messages: [
        {id: 0, text:'text 1'},
        {id: 1, text:'text 2'},
        {id: 2, text:'text 2'},
      ]
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const list = this.state.messages;
    const newMessage ={
      id: this.state.message.length,
      text: this.state.message
    };
    list.push(newMessage);
    this.setState({message: list});
    this.setState({message: ''});
  }

  updateMessage(e){
    this.setState({message: e.target.value});
    console.log(this.state.message);
  }
  render(){
    const  { messages } = this.state;
    const messagesList = messages.map(message =>{
      return <li key={message.id}>{message.text}</li>
    })

    return(
      <div>
        <ol>
          {messagesList}
          </ol>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.updateMessage.bind(this)}
            />
            <button>
            enviar
            </button>
          </form>
      </div>
    )
  }
}
 export default ChatRoom;
