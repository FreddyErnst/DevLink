import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {logOutEmployer, logOutDev} from '../../redux/reducers/loginReducer'

class Header extends React.Component {
    constructor() {
        super()
    }
    handleDevLogOut = () => {
        this.props.logOutDev()
        this.props.history.push('/')
    }
    handleEmployerLogOut = () => {
        this.props.logOutEmployer()
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        return (
            <div className="Header-main">
                <div className="Header-container">
                <img src = "https://i.imgur.com/6g4Ejcv.png" className = "imgD"/>
                
                </div>
                <div className='Greeting'>
                {this.props.employer.firstname ? <h2 className='name'>Welcome {this.props.employer.username}</h2> :null} 
            
                {this.props.developer.firstname ? <h2 className='name'>Welcome {this.props.developer.username}</h2> :null}
                </div>
                <div>
                
                    <ul className="Header-list">
                    
            
                        {this.props.employer.firstname ? <Link to='/EmployeeDashboard' style={{  color: 'white' }}><li>Dashboard</li></Link> : null}
                        {this.props.developer.firstname ? <Link to='/DevDashboard' style={{  color: 'white' }}><li>Dashboard</li></Link> : null}

                        {this.props.employer.firstname ? <Link to='/EmployeeForm' style={{  color: 'white' }}><li>Skills</li></Link> : null}
                        {this.props.developer.firstname ? <Link to='/DevForm' style={{  color: 'white' }}><li>Skills</li></Link> : null}

                        {this.props.employer.firstname ? <Link to='/EmployerProfile' style={{  color: 'white' }}><li>Profile</li></Link> : null}
                        {this.props.developer.firstname ? <Link to='/DevProfile' style={{  color: 'white' }}><li>Profile</li></Link> : null}

                
                        {this.props.developer.username ? <button onClick={this.handleDevLogOut}>LogOut</button> : null }
                        {this.props.employer.username ? <button onClick={this.handleEmployerLogOut}>LogOut</button> : null }

                    

                    
                        
                        
                        
                    </ul>
    
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = reduxState => {
    return {
        developer: reduxState.loginReducer.developer,
        employer: reduxState.loginReducer.employer
    }
}

export default withRouter(connect(mapStateToProps, {
    logOutDev, logOutEmployer
})(Header))
