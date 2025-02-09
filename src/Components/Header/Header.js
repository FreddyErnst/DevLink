import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { logOutEmployer, logOutDev, getDev, getEmployer } from '../../redux/reducers/loginReducer'



class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            menuOpenStatus: "top-menu",
        
        }
    }

    componentDidMount = () => {
        this.props.getDev()
        this.props.getEmployer()
    }

    handleDevLogOut = () => {
        this.props.logOutDev()
        this.props.history.push('/')
    }
    handleEmployerLogOut = () => {
        this.props.logOutEmployer()
        this.props.history.push('/')
    }

    toggleMenu = () => {
        if (this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu") {
            this.setState({ menuOpenStatus: "top-menu-open" })
        } else if (this.state.menuOpenStatus === "top-menu-open") {
            this.setState({ menuOpenStatus: "top-menu-close" })
        }
    }
    render() {

        return (
            <main id="Header-Main">
                <div className="Header-main">
                    <div className="Header-container">
                        <img src="https://i.imgur.com/6g4Ejcv.png" className="imgD" />

                    </div>
                    <div className='Greeting'>
                        {this.props.employer.firstname ? <h3 className='name'>Welcome {this.props.employer.username}</h3> : null}

                        {this.props.developer.firstname ? <h3 className='name'>Welcome {this.props.developer.username}</h3> : null}
                    </div>
                    <div className="List-Container">

                        <ul className="Header-list">


                            {this.props.employer.firstname ? <Link to='/EmployerDashboard' style={{ color: 'white' }}><li>Dashboard</li></Link> : null}
                            {this.props.developer.firstname ? <Link to='/DevDashboard' style={{ color: 'white' }}><li>Dashboard</li></Link> : null}

                            {this.props.employer.firstname ? <Link to='/EmployeeForm' style={{ color: 'white' }}><li>Skills</li></Link> : null}
                            {this.props.developer.firstname ? <Link to='/DevForm' style={{ color: 'white' }}><li>Skills</li></Link> : null}

                            {this.props.employer.firstname ? <Link to='/EmployerProfile' style={{ color: 'white' }}><li>Profile</li></Link> : null}
                            {this.props.developer.firstname ? <Link to='/DevProfile' style={{ color: 'white' }}><li>Profile</li></Link> : null}


                            {this.props.developer.username ? <button onClick={this.handleDevLogOut}>LogOut</button> : null}
                            {this.props.employer.username ? <button onClick={this.handleEmployerLogOut}>LogOut</button> : null}

                            <li className="Hamburger hidden-by-default">

                                {this.props.employer.firstname || this.props.developer.firstname ? <img src="https://library.kissclipart.com/20180830/oyw/kissclipart-hamburger-icon-white-clipart-hamburger-button-comp-867a6f7cf898addd.jpg" className='Hamburger-Button' alt="Hamburger-Button"
                                    onClick={this.toggleMenu} /> : null}
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${this.state.menuOpenStatus}`}>
                    <div className='Open-Menu'>
                        {this.props.employer.firstname ? <Link to='/EmployerDashboard' style={{ color: 'white' }}><h3>Dashboard</h3></Link> : null}
                        {this.props.developer.firstname ? <Link to='/DevDashboard' style={{ color: 'white' }}><h3>Dashboard</h3></Link> : null}

                        {this.props.employer.firstname ? <Link to='/EmployeeForm' style={{ color: 'white' }}><h3>Skills</h3></Link> : null}
                        {this.props.developer.firstname ? <Link to='/DevForm' style={{ color: 'white' }}><h3>Skills</h3></Link> : null}

                        {this.props.employer.firstname ? <Link to='/EmployerProfile' style={{ color: 'white' }}><h3>Profile</h3></Link> : null}
                        {this.props.developer.firstname ? <Link to='/DevProfile' style={{ color: 'white' }}><h3>Profile</h3></Link> : null}

                    </div>
                </div>
            </main>
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
    logOutDev, logOutEmployer, getDev, getEmployer
})(Header))
