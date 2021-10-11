import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  
  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
        const user = jwtDecode(jwt);
        this.setState({user});
    } catch {}
}

  userRegister = async (registereduser) => {
    console.log(registereduser);
    let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', registereduser);
    console.log(response.data);
    if(response === undefined){
      this.setState({});
    }
    else {
      this.setState({
        registereduser: response.data,
      });
      console.log(registereduser)
    }
  }

  userLogin = async (login) => {
    try {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/',login);
        if (response === undefined){
            this.setState({});
        }
        else{
            this.setState({
                token: response.data,
                user: this.state.user,
                loggedIn: !this.state.loggedIn
            });
            localStorage.setItem('token', this.state.token.token);
            console.log(this.state.token.token);
            console.log(this.state.user);
        }
        console.log(response.data)
    } catch(err) {
         console.log(err)
    }
}


  render() { 
    return ( 
      <div>
        <NavBar />
        <Switch>
          <Route path = "/registration" render={() => <Registration userRegister = {this.userRegister} />} />
          <Route path = "/login" render={() => <Login userLogin = {this.userLogin} /> } />
        </Switch>
        <Logout />
      </div>
     );
  }
}
 
export default App;
