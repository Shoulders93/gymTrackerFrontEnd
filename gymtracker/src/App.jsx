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
import DisplayMisc from './components/MiscTracker/MiscTracker';
import AddExercise from './components/ExerciseTracker/AddExercise';
import AddFood from './components/FoodTracker/AddFood';
import AddMisc from './components/MiscTracker/AddMisc';
// import CreateDisplay from './components/ExerciseTracker/CreateAndDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      exercises: [],
      foods: [],
      items: [],
     }
  }

componentDidMount() {
  const jwt = localStorage.getItem('token');
  try{
      const user = jwtDecode(jwt);
      this.setState({user});
  } catch {}
  this.getUserExercises();
  this.getUserFoods();
  this.getUserMisc();
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
  this.componentDidMount();
  window.location.href = '/login'
}

userLogin = async (login) => {
  try {
      let response = await axios.post('http://127.0.0.1:8000/api/auth/login/',login);
        console.log("Response date: ", response.data)
          this.setState({
              token: response.data,
              loggedIn: !this.state.loggedIn
          });
          localStorage.setItem('token', response.data.access);
          console.log(this.state.access);
      console.log(response.data)
  } catch(err) {
        console.log(err)
  }
  this.getUserExercises();
  this.getUserFoods();
  this.getUserMisc();
  this.componentDidMount();
  window.location.href = '/getting_started'
}

getUserExercises = async () => {
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

addUserExercises = async (newExercise) => {
  try{
    const jwt= localStorage.getItem('token');
    console.log("JWT: ", jwt)
    let response = await axios.post('http://127.0.0.1:8000/api/gym/', newExercise, {headers: {Authorization: 'Bearer ' + jwt}});
    console.log("Exercises data:", response)
  }
    catch(err) {
      console.log(err);
  }
  this.getUserExercises();
  window.location.href ='/display_exercises'
}

getUserFoods = async () => {
  try{
    const jwt= localStorage.getItem('token');
    let response = await axios.get('http://127.0.0.1:8000/api/food/', {headers: {Authorization: 'Bearer ' + jwt}});
    this.setState({
      foods: response.data
    })
    console.log("Foods data: ", response)
  }
    catch(err) {
      console.log(err);
  }
}

addUserFood= async (newFood) => {
  try{
    const jwt= localStorage.getItem('token');
    console.log("JWT: ", jwt)
    let response = await axios.post('http://127.0.0.1:8000/api/food/', newFood, {headers: {Authorization: 'Bearer ' + jwt}});
    console.log("Foods data:", response)
  }
    catch(err) {
      console.log(err);
  }
  this.getUserFoods();
  window.location.href ='/display_foods'
}

getUserMisc = async () => {
  try{
    const jwt= localStorage.getItem('token');
    let response = await axios.get('http://127.0.0.1:8000/api/misc/', {headers: {Authorization: 'Bearer ' + jwt}});
    this.setState({
      items: response.data
    })
    console.log("Misc data: ", response)
  }
    catch(err) {
      console.log(err);
  }
}
addUserMisc= async (newMisc) => {
  try{
    const jwt= localStorage.getItem('token');
    console.log("JWT: ", jwt)
    let response = await axios.post('http://127.0.0.1:8000/api/misc/', newMisc, {headers: {Authorization: 'Bearer ' + jwt}});
    console.log("Misc data:", response)
  }
    catch(err) {
      console.log(err);
  }
  this.getUserMisc();
  window.location.href = '/display_misc'
}


  render() { 
    const user = this.state.user;
    return (
      <div className='App'>
        <NavBar user={user}/>
        <div className="NavBar">
        <Switch>
          <Route path = "/registration" render={() => <Registration userRegister = {this.userRegister} />} />
          <Route path = "/login" render={() => <Login userLogin = {this.userLogin} /> } />
          <Route path = "/" exact render={() => <Home />} />
          <Route path = "/getting_started" render ={() => <GettingStarted /> } />
          <Route path = "/add_exercises" component={() => <AddExercise createNewExercise={this.addUserExercises} />  } />
          <Route path = "/display_exercises" component={() => <DisplayExercises allExercises = {this.state.exercises} />  } />
          {/* <Route path = "/exercises" component={() => <AddExercise createNewExercise={this.addUserExercises} /> && <DisplayExercises allExercises = {this.state.exercises} /> } /> */}
          {/* <Route path = "/exercises" component={() => <CreateDisplay createNewExercise = {this.props.addUserExercises} allExercises = {this.props.exercises}/>} /> */}
          <Route path = "/add_food" component={() => <AddFood createNewFood={this.addUserFood} /> } />
          <Route path = "/display_foods" render = {() => <DisplayFood allFoods = {this.state.foods} />} />
          <Route path = "/add_misc" render = {() => <AddMisc createNewMisc = {this.addUserMisc} />} />
          <Route path = "/display_misc" render = {() => <DisplayMisc allMisc = {this.state.items} />} />
          <Route path = "/logout" render={() => <Logout componentDidMount/> } />
        </Switch>

        </div>
        
      </div>
     );
  }
}
 
export default App;