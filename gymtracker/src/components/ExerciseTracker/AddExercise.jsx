import React, {Component} from "react";

class AddExercise extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: '',
            exercise: '',
            sets: '',
            reps: '',
            weight: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewExercise(this.state)
    }

    render() { 
        return ( 
            <form className='create' onSubmit={this.handleSubmit}>
                <label>Date</label>
                <input type='date' name="date" onChange={this.handleChange} value={this.state.date} />
                <label>Exercise</label>
                <input type='text' name="exercise" onChange={this.handleChange} value={this.state.exercise} />
                <label>Sets</label>
                <input type='number' name="sets" onChange={this.handleChange} value={this.state.sets} />
                <label>Reps</label>
                <input type='number' name="reps" onChange={this.handleChange} value={this.state.reps} />
                <label>Weight</label>
                <input type='number' name="weight" onChange={this.handleChange} value={this.state.weight} />
                <button type="submit">Add Exercise</button>
            </form>
         );
    }
}
 
export default AddExercise;