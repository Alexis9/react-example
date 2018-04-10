import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Form from './Form'

class App extends Component {


  submit(input1,input2,input3){
    alert(input1)
    alert(input2)
    alert(input3)
  }
  
  render() {
    var title = "title"
    return (
      <div >
        <Header title={title}/>
        
        <Form submit={this.submit}/>
      </div>
    );
  }
}

export default App;
