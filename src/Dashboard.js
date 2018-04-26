import React from 'react'
import App from './App';
import {  Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'

@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component{
    render(){
        console.log(this.props);
        const match = this.props.match
     const redirectToLogin = <Redirect to='/login'></Redirect>
     const app = (
                <div>
                {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
                <ul>
                    <li><Link to={`${match.url}/`}>链接一</Link></li>
                    <li><Link to={`${match.url}/link2`}>链接二</Link></li>
                    <li><Link to={`${match.url}/link3`}>链接三</Link></li>
                    <li><Link to={`${match.url}/link4`}>链接四</Link></li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/link2`} component={Link2}></Route>
                <Route path={`${match.url}/link3`} component={Link3}></Route>
                <Route path={`${match.url}/link4`} component={Link4}></Route>
            </div>
           )
        return this.props.isAuth?app:redirectToLogin
    }
}
function Link2(){
    return <h1>这是链接二</h1>
}

function Link3(){
    return <h1>这是链接三</h1>
}

function Link4(){
    return <h1>这是链接四</h1>
}
export default Dashboard