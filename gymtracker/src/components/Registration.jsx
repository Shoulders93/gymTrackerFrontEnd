import React, {Component} from "react";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
        }
        this.props.userRegister(user);
        this.setState({
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
        });
    }

    render() { 
        return ( 
            <div className='registration'>
                <form onSubmit = {this.handleSubmit}>
                    <table>
                    <tr>
                        <td><label>Username</label>
                        <input type = 'text' name = 'username' onChange={this.handleChange} value= {this.state.username}/></td>
                    </tr>
                    <tr>
                        <td><label>Password</label>
                        <input type = 'text' name = 'password' onChange={this.handleChange} value= {this.state.password}/>
                        </td>
                    </tr>
                    <tr>
                        <td>   
                        <label>Email</label>
                        <input type = 'text' name = 'email' onChange={this.handleChange} value= {this.state.email}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>First Name</label>
                        <input type = 'text' name = 'first_name' onChange={this.handleChange} value= {this.state.first_name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>Last Name</label>
                        <input type = 'text' name = 'last_name' onChange={this.handleChange} value= {this.state.last_name}/>
                        </td>
                    </tr>
                    <button type="submit">Submit</button>
                    </table>
                </form>
            </div>
         );
    }
}
 
export default Registration;