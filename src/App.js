import React from 'react';
import Login from './components/Login';
import Summary from './components/Summary'
import Order from './components/Order';
import logo from './burger-logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      patty:'',
      amount: '',
      doneness: '',
      topping: '',
      cheese: '',
      bun: '',
      sauce: '',
      extra: '',
      loggedIn:false,
      loggedIn1:false
    };
    this.usercheck = this.usercheck.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setInput = this.setInput.bind(this);
    this.submit = this.submit.bind(this);
    }
submit(){
  this.setState({
    loggedIn1:true,
  })
}
  usercheck(){
    if (this.state.username === "abc" && this.state.password === "123" ){
      this.setState({
        loggedIn:true
      })
    } else {
      alert('Username and Password doesn\'t match');
    }
  }

  setUserName(UserName){
    this.setState({
     username:UserName
    })
  }

  setPassword(UserPassword){
    this.setState({
     password:UserPassword
    })
  }
  
  setInput(property, value) {
    this.setState({
      [property]: value
    })
  }

  render(){

    let currComponent;
    if(this.state.loggedIn===true && this.state.loggedIn1===false) {
      currComponent = <Order inputFunction={this.setInput} submit={this.submit}/>
    } else if(this.state.loggedIn===false && this.state.loggedIn1===false) {
      currComponent = <Login userName={this.setUserName}
      userpassword={this.setPassword} checkUser={this.usercheck}/>
    }
    else if(this.state.loggedIn1===true)
    {currComponent = <Summary info={this.state}/>}

    return (
      <div className="App">
        <img src={logo} alt="Delicious Burger" id="logo" />
        <hr></hr>
        {currComponent}
  
      </div>
    );
  }

}

export default App;


