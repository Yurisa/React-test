import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname) > -1){
            return null
        }
        //获取用户信息
        //是否登录
        //现在的url地址 login是不需要跳转的
        //用户的type 身份

        axios.get('/user/info').then(res => {
            if(res.status === 200){
              if(res.data.code === 0){
                
              }else{
                this.props.history.push('/login')
             }
            }
        })
    }
    render(){
       return null
    }
}

export default AuthRoute