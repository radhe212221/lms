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
            <Route exact path="/student/Admin" component={Admin} />
            <Route exact path="/student/Faculty" component={Faculty} />
            <Route exact path="/student/Student" component={Student} />
            <Route exact path="/student/Courses" component={Courses} />
            <Route exact path="/student/Slots" component={Slots} />
            <Route exact path="/student/Batch" component={Batch} />
            <Route exact path="/student/Attendance" component={Attendance} />
            <Route exact path="/student/Chart" component={Chart} />
            <Route exact path="/student/Graph" component={Graph} />
            <Route exact path="/student/Planner" component={Planner} />
            <Route exact path="/student/Logout" component={Logout} />
        </Switch>
    )
}
