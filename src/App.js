import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, List} from 'antd-mobile';
// import {createStore} from 'redux';
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
