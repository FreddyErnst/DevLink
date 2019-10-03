import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import DevForm from './Components/DevForm/DevForm'
import EmployeeForm from './Components/EmployeeForm/EmployeeForm'
import EmployerDashboard from './Components/EmployerDashboard/EmployerDashboard'
import DevDashboard from './Components/DevDashboard/DevDashboard'
import EmployerProfile from './Components/EmployerProfile/EmployerProfile'
import DevProfile from './Components/DevProfile/DevProfile'
import EmailForm from './Components/EmailForm/EmailForm'


export default (
    <Switch>
        
        <Route path ='/DevForm' component={DevForm} />
        <Route path ='/DevDashboard' component={DevDashboard}/>
        <Route path ='/EmployeeForm' component={EmployeeForm} />
        <Route path ='/EmployerDashboard' component={EmployerDashboard}/>
        <Route path ='/EmployerProfile' component={EmployerProfile} />
        <Route path ='/DevProfile' component={DevProfile}/>
        <Route path ='/Email' component={EmailForm}/>
        <Route path  ='/' component={Landing}/>
    </Switch>
)