import React, {Component} from "react";

class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: '',
            breakfast: '',
            lunch: '',
            dinner: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewFood(this.state)
    }

    render() { 
        return ( 
            <form className='create' onSubmit={this.handleSubmit}>
                <label>Date</label>
                <input type='date' name="date" onChange={this.handleChange} value={this.state.date} />
                <label>Breakfast</label>
                <input type='text' name="breakfast" onChange={this.handleChange} value={this.state.breakfast} />
                <label>Lunch</label>
                <input type='text' name="lunch" onChange={this.handleChange} value={this.state.lunch} />
                <label>Dinner</label>
                <input type='text' name="dinner" onChange={this.handleChange} value={this.state.dinner} />
                <button type="submit">Add</button>
            </form>
         );
    }
}
 
export default AddFood;