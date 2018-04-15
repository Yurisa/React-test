import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, List} from 'antd-mobile';
import { add, remove, addAsync } from './index.redux.js';
import {connect} from 'react-redux'
// import {createStore} from 'redux';
// const mapStatetoProps = (state) => {
//   return {num:state}
// }

// const actionCreator = { add, remove, addAsync};
// // App = connect(mapStatetoProps, actionCreator)(App);
@connect(
  //将需要的state放到props
  state => ({num:state.counter}),
  //将需要的方法放到props
  { add, remove, addAsync})
class App extends Component {
  constructor(){
    super();
    this.state = {
     name:"hdd",
     student:[
       {"name":"hahaha"},
       {"name":"lalalla"}]
    }
  }
  componentWillMount(){
    console.log('组件马上加载');
  }
  componentDidMount(){
    console.log('组件加载完毕');
  }
  changeName(){
    this.setState({
      name:"yellow2dong"
    })
  }
  addStudent(){
    this.setState({
      student:[...this.state.student, {"name":"yellow2dong"}]
    })
  }
  render() {
    const {num, add, remove, addAsync} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.state.name}</h1>
        </header>
        <Button type='primary' onClick={()=>this.addStudent()}>改变name</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>现在的数字为{num}</h1>
        <button onClick={add}>加加加</button>
        <button onClick={remove}>减减减</button>
        <button onClick={addAsync}>延迟加</button>
        <List renderHeader={()=> "用户列表"}>
          {this.state.student.map((v, i) => {
            return (
              <List.Item key={i}>{v.name}</List.Item>
            )
          })}
        </List>
      </div>
    );
  }
}

export default App;
