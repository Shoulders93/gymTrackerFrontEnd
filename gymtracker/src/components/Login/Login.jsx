import React, {Component} from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.userLogin(login)
        console.log(`handle submit" ${login}`)
        this.setState({
            username: '',
            password: ''
        });
    }

    verifyPassword =() =>{
        let x = document.getElementById('myInput');
        if (x.type === 'password'){
            x.type = 'text';
        }
        else {
            x.type = 'password';
        }
    }

    render() { 
        return ( 
            <div className= "login">
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' onChange={this.handleChange} value={this.state.username} />
                    <label>Password</label>
                    <input type='password' name='password' id = 'myInput'onChange={this.handleChange} value={this.state.password} />
                    <input type = 'checkbox' onClick={this.verifyPassword} />
                    <label>Show Password</label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Login;