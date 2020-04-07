import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createWorkout } from '../../store/actions/workoutActions'

class WorkoutForm extends Component {
    state = {
        title: '',
        description: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createWorkout(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create workout</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn mint lighten-1 z-depth-0">Create</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createWorkout: (workout) => dispatch(createWorkout(workout))
    }
}

export default connect(null, mapDispatchToProps)(WorkoutForm)