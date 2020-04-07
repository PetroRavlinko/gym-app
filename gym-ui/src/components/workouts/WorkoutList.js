import React from 'react'
import WorkoutSummary from './WorkoutSummary'

const WorkoutList = ({workouts}) => {

    return (
        <div className="project-list section">
            { workouts && workouts.map(workout => {
                return (
                    <WorkoutSummary workout={workout} key={workout.id} />
                )
            })}
        </div>
    )
}

export default WorkoutList