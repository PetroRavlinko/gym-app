import React from 'react'

const WorkoutDetails = (props) => {
    const id = props.match.params.id

    return (
        <div className="container section workout-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Workout Title - {id}</span>
                    <p>Lorem ipsum etc.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by John Doe</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>

    )
}

export default WorkoutDetails