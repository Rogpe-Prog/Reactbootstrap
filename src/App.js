import React, { Component } from 'react'
import Alert from './Alerten'
import './App.css'
import Logo from './react-bootstrap.png'

function App() {
  return (
    <div className="App">
      <h1><img className="logo" src={Logo}></img> React-bootstrap</h1>
      <Alert />
    </div>
  )
}

export default App;
