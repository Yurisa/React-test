import React from 'react'
import Logo from '../../component/logo/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type:'genuis'
        }
        this.changeType = this.changeType.bind(this)
    }
    changeType(){
        this.setState({type:'boss'})
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
             <Logo></Logo>
             <List>
                 <InputItem>用户名</InputItem>
                 <InputItem>密码</InputItem>
                 <InputItem>确认密码</InputItem>
                 <WhiteSpace/>
                 <RadioItem checked={this.state.type==='genuis'}>牛人</RadioItem>
                 <RadioItem onClick={this.changeType} checked={this.state.type==='boss'}>BOSS</RadioItem>
             </List>
            </div>
        )
    }
}

export default Register