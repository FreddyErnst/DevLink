import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import DevForm from './Components/DevForm/DevForm'
import EmployeeForm from './Components/EmployeeForm/EmployeeForm'
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard'


export default (
    <Switch>
        
        <Route path ='/DevForm' component={DevForm} />
        <Route path ='/EmployeeForm' component={EmployeeForm} />
        <Route path ='/EmployeeDashboard' component={EmployeeDashboard}/>
        <Route path  ='/' component={Landing}/>
    </Switch>
)