import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import GettingStarted from './components/GettingStarted/GettingStarted';
import DisplayExercises from './components/ExerciseTracker/ExerciseTracker';
import DisplayFood from './components/FoodTracker/FoodTracker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      exercises: []
     }
  }

componentDidMount() {
  const jwt = localStorage.getItem('token');
  try{
      const user = jwtDecode(jwt);
      this.setState({user});
  } catch {}
  this.getUserExercises();
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
      // if (response !== undefined){
      //     this.setState({});
      // }
      // else{
        console.log("Response date: ", response.data)
          this.setState({
              token: response.data,
              // user: this.state.user,
              loggedIn: !this.state.loggedIn
          });
          localStorage.setItem('token', response.data.access);
          console.log(this.state.access);
      // }
      console.log(response.data)
  } catch(err) {
        console.log(err)
  }
}

getUserExercises = async () => {
  debugger;
  try{
    const jwt= localStorage.getItem('token');
    console.log("JWT: ", jwt)
    let response = await axios.get('http://127.0.0.1:8000/api/gym/', {headers: {Authorization: 'Bearer ' + jwt}});
    this.setState({
      exercises: response.data
    })
    console.log("Exercises data:", response)
  }
    catch(err) {
      console.log(err);
  }
}

getUserFoods = async () => {
  try{
    const jwt= localStorage.getItem('token');
    let response = await axios.get('http://127.0.0.1:8000/api/food/', {headers: {Authorization: 'Bearer ' + jwt}});
    if (response === undefined){
      this.setState({
      date: [],
      breakfast: [],
      lunch: [],
      dinner: [],
      });
    }
    else{
        this.setState({ 
            user: response.data
        });
        console.log(this.state.user)
    }
  }
    catch(err) {
      console.log(err);
  }
}

  render() { 
    const user = this.state.user;
    return (
      <div>
        <NavBar user={user}/>
        <Switch>
          <Route path = "/registration" render={() => <Registration userRegister = {this.userRegister} />} />
          <Route path = "/login" render={() => <Login userLogin = {this.userLogin} /> } />
          <Route path = "/" exact render={() => <Home />} />
          <Route path = "/getting_started" render ={() => <GettingStarted /> } />
          <Route path = "/exercises" component={() => <DisplayExercises allExercises = {this.state.exercises} /> } />
          <Route path = "/foods" render = {() => <DisplayFood allFoods = {this.state.allFoods} />} />
          <Route path = "/logout" render={() => <Logout /> } />
        </Switch>
      </div>
     );
  }
}
 
export default App;
