import React from 'react';
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import { getChatId } from '../../util'
@connect(
    state => state,
    { getMsgList, sendMsg, recvMsg }
)
class Chat extends React.Component {
    constructor(props){
       super(props)
       this.state = {
           text:'',
           showEmoji:false,
        }
    }
    componentDidMount(){
		if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
			this.props.recvMsg()
        }
        this.fixCarousel()
        // socket.on('recvmsg', data =>{
        //     this.setState({ msg:[...this.state.msg, data.text]});
        // })
    }
    fixCarousel(){
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'))
            }, 0)
    }
    handleSubmit(){
        // socket.emit('sendmsg', {text:this.state.text})
        // this.setState({text:''})
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from, to, msg})
        this.setState({ text:''});
    }
    render() { 
        const emoji = '😃 🐻 🍔 ⚽ 🌇 💡 ❤ 😂 ♡ 😍 🤔 🔥 😊 🙄 🐦 🙅‍ 😏 📚 📲 ♿️ 😂'.split(' ').filter(v => v)
        .map(v => ({text: v}))
        const userId = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        if(!users[userId]){
            return null
        }
        const chatId = getChatId(userId, this.props.user._id)
        const chatmsgs = this.props.chat.chatmsg.filter(v => chatId === v.chatid)
        return ( 
            <div id='chat-page'>
              <NavBar 
              mode='dark'
              icon={<Icon type='left'/>}
              onLeftClick={() => {
                  this.props.history.goBack()
              }}>
                 {users[userId].name}
              </NavBar>
              {chatmsgs.map(v => {
                  const avatar = require(`../img/${users[v.from].avatar}.png`)
                  return v.from === userId?(
                      <List key={v._id}>
                          <Item
                          thumb={avatar}
                          >{v.content}</Item>
                      </List>
                  ):(
                      <List key={v._id}>
                          <Item
                          extra={<img src={avatar}/>}
                          className='chat-me'>{v.content}</Item>
                      </List>
                  )
                })}
              <div className="stick-footer">
                <List>
                    <InputItem
                        placeholder='请输入'
                        value = {this.state.text}
                        onChange={
                            v => {
                                this.setState({text:v})
                            }
                        }
                        extra={
                            <div>
                            <span onClick={() => {this.setState({
                                showEmoji:!this.state.showEmoji
                               })
                               this.fixCarousel()}} style={{marginRight:15}}>😃</span>
                            <span onClick={() => {this.handleSubmit()}}>发送</span>
                            </div>
                    }>
                    信息
                    </InputItem>
                </List>
                {this.state.showEmoji?<Grid 
                data={emoji}
                columnNum={9}    
                carouselMaxRow={4}
                isCarousel={true}
                onClick={el => {
                    this.setState({ text: this.state.text+el.text });
                }}
                />:null}
            </div>
            </div>
          
        )
    }
}
 
export default Chat;