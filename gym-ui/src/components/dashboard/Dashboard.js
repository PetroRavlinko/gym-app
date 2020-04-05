import React, {Component} from 'react'
import Notifications from './Notifcations'
import WorkoutList from '../workouts/WorkoutList'

class Dashboard extends Component {
    render () {

        return (
            <div className="dashboad container">
                <div className="row">
                    <div className="col s12 m6">
                        <WorkoutList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard

