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
            <Route exact path="/admin/Admin" component={Admin} />
            <Route exact path="/admin/Faculty" component={Faculty} />
            <Route exact path="/admin/Student" component={Student} />
            <Route exact path="/admin/Courses" component={Courses} />
            <Route exact path="/admin/Slots" component={Slots} />
            <Route exact path="/admin/Batch" component={Batch} />
            <Route exact path="/admin/Attendance" component={Attendance} />
            <Route exact path="/admin/Chart" component={Chart} />
            <Route exact path="/admin/Graph" component={Graph} />
            <Route exact path="/admin/Planner" component={Planner} />
            <Route exact path="/admin/Logout" component={Logout} />
        </Switch>
    )
}
