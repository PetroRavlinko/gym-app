const initState = {
    workouts: [
        {id: '1', title: 'Shoulders and Biceps', description: 'Day #1: Shoulders and biceps'},
        {id: '2', title: 'Legs', description: 'Day #2: Legs'},
        {id: '3', title: 'Triceps and Delts', description: 'Day 3: Triceps and delts'},
        {id: '4', title: 'Back', description: 'Day 4: Back'}
    ]
}

const workoutReducer = (state = initState, action) => {
    return state
}

export default workoutReducer