import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './Admin'
import Faculty from './Faculty'
import Student from './Student'
import Courses from './Courses'
import Slots from './Slots'
import Batch from './Batch'
import Attendance from './Attendance'
import Chart from './Chart'
import Graph from './Graph'
import Planner from './Planner'
import Logout from './Logout'
export default function Index() {
    return (
        <Switch>
            <Route exact path="/faculty/Admin" component={Admin} />
            <Route exact path="/faculty/Faculty" component={Faculty} />
            <Route exact path="/faculty/Student" component={Student} />
            <Route exact path="/faculty/Courses" component={Courses} />
            <Route exact path="/faculty/Slots" component={Slots} />
            <Route exact path="/faculty/Batch" component={Batch} />
            <Route exact path="/faculty/Attendance" component={Attendance} />
            <Route exact path="/faculty/Chart" component={Chart} />
            <Route exact path="/faculty/Graph" component={Graph} />
            <Route exact path="/faculty/Planner" component={Planner} />
            <Route exact path="/faculty/Logout" component={Logout} />
        </Switch>
    )
}
