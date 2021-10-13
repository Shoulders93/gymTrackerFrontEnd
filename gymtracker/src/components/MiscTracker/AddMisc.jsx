import React, {Component} from "react";

class AddMisc extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: '',
            hours_slept: '',
            bodyweight: '',
            additional_notes: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewMisc(this.state)
    }

    render() { 
        return ( 
            <form className='create' onSubmit={this.handleSubmit}>
                <label>Date</label>
                <input type='date' name="date" onChange={this.handleChange} value={this.state.date} />
                <label>Hours Slept</label>
                <input type='number' name="hours_slept" onChange={this.handleChange} value={this.state.hours_slept} />
                <label>Bodyweight</label>
                <input type='number' name="bodyweight" onChange={this.handleChange} value={this.state.bodyweight} />
                <label>Additional Notes</label>
                <input type='text' name="additional_notes" onChange={this.handleChange} value={this.state.additional_notes} />
                <button type="submit">Add</button>
            </form>
         );
    }
}
 
export default AddMisc;