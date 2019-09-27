import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import DevForm from './Components/DevForm/DevForm'
import EmployeeForm from './Components/EmployeeForm/EmployeeForm'
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard'
import DevDashboard from './Components/DevDashboard/DevDashboard'
import EmployerProfile from './Components/EmployerProfile/EmployerProfile'
import DevProfile from './Components/DevProfile/DevProfile'


export default (
    <Switch>
        
        <Route path ='/DevForm' component={DevForm} />
        <Route path ='/DevDashboard' component={DevDashboard}/>
        <Route path ='/EmployeeForm' component={EmployeeForm} />
        <Route path ='/EmployeeDashboard' component={EmployeeDashboard}/>
        <Route path ='/EmployerProfile' component={EmployerProfile} />
        <Route path ='/DevProfile' component={DevProfile}/>
        <Route path  ='/' component={Landing}/>
    </Switch>
)