import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashbnoard from './components/dashboard/Dashboard'
import WorkoutDetails from './components/workouts/WorkoutDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import WorkoutForm from './components/workouts/WorkoutForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashbnoard} />
          <Route path="/workout/:id" component={WorkoutDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={WorkoutForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
