import React, {Component} from 'react'
import Notifications from './Notifcations'
import WorkoutList from '../workouts/WorkoutList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render () {
        const { workouts } = this.props
        return (
            <div className="dashboad container">
                <div className="row">
                    <div className="col s12 m6">
                        <WorkoutList workouts={workouts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prjects: state.workout.workouts
    }
}

export default connect(mapStateToProps)(Dashboard)

