import logo from './burger-logo.png';
import './App.css';
import Login from './components/Login'
import React from'react'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <img src={logo} alt="Delicious Burger" id="logo" />
      <hr></hr>

      
      <Login/>
    </div>
  
  );}
}

export default App;
