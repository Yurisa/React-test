import React from 'react'
import Logo from '../../component/logo/logo';
import { List, InputItem,  WhiteSpace, Button, Radio } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genuis'
        }
        this.changeType = this.changeType.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleRegister(){
      this.props.register(this.state)
    }
    changeType(){
        this.setState({type:'boss'})
    }
    handleChange(key, val){
        this.setState({[key]:val})
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
             {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
             <Logo></Logo>
             <List>
                 {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                 <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                 <WhiteSpace/>                 
                 <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                 <WhiteSpace/>                 
                 <InputItem type='password' onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                 <WhiteSpace/>
                 <RadioItem onChange={() => this.handleChange('type', 'genius')} checked={this.state.type==='genuis'}>牛人</RadioItem>
                 <WhiteSpace/>                 
                 <RadioItem onChange={() => this.handleChange('type', 'boss')}  checked={this.state.type==='boss'}>BOSS</RadioItem>
             </List>
             <Button type='primary' onClick={this.handleRegister}>注册</Button>
            </div>
        )
    }
}

export default Register