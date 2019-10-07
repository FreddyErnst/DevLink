import React, { Component } from 'react'
import '../../redux/reducers/devFormReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class DevDashboard extends Component {
    constructor() {
        super()
        this.state = {
    

        }
    }

    render() {
        return (
            <div className="EmployerPostContainer">
                <div className="Dash-Header">
                <h1>Employers looking for developers</h1>
                
                </div>
                {this.props.employer ? this.props.employer.map((val, index) => {
                    return <div className="EmployerPost">
                        <div className='EmployerImg'><img src={val.profilepic} className="Employer-Image"/></div>
                        <div>
                        <Link to ='/Email'><img src= "https://1000logos.net/wp-content/uploads/2018/04/Symbol-Gmail.jpg" className="Email-Logo"/></Link>
                        <a href={val.github} target="_blank"><img src = 'https://image.flaticon.com/icons/svg/25/25231.svg' className="GitHub"/></a>
                        </div>
                        <h3>{val.firstname} {val.lastname}</h3>
                        <h4>{val.bio}</h4>
                        <h4>Primary Language: {val.skill1}</h4>
                        <h4>Styling: {val.skill2}</h4>
                        <h4>Backend: {val.skill3}</h4>
                        <h4>Database: {val.skill4}</h4>
                        <h4>Experience required: {val.experience}</h4>
                        <h4>Duration: {val.joblength}</h4>
                        <h4>Current location: {val.state}</h4>
                    </div>
                }) : <h1> Please go fill in the form </h1>}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        employer: reduxState.devFormReducer.employer
    }
}

export default connect(mapStateToProps)(DevDashboard)
