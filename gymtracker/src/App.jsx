import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Registration from './components/Registration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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


  render() { 
    return ( 
      <div>
        < Registration userRegister = {this.userRegister}/>
      </div>
     );
  }
}
 
export default App;
