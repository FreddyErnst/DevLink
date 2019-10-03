
import React, { Component } from 'react'
import  '../../redux/reducers/employerFormReducer'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class EmployerDashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        {console.log(this.props.developer)}
        return (
            <div className="DevPostContainer">

                <h1>Developers Seeking Jobs</h1>
                <input placeholder='Search by location' />

                {this.props.developer ? this.props.developer.map((val, index) => {
                    return <div className="DevPost">
                        <h1>{val.firstname} {val.lastname}</h1>
                        <div className="Dev-Info">
                        <div className='DevImg'><img src={val.profilepic} className="Developer-Photo"/></div>
                        <span>
                            <h2>Primary Language: {val.skill1}</h2>
                            <h2>Styling Language: {val.skill2}</h2>
                            <h2>Database language: {val.skill3}</h2>
                            <h2>DataBase language: {val.skill4}</h2>
                            <h2>Current experience: {val.experience}</h2>
                            <h2>Length of job: {val.joblength}</h2>
                            <h2>Biography: {val.bio}</h2>
                            <h2>Location: {val.state}</h2>
                            <Link to ='/Email'>Email me!</Link>
                        </span>
                        </div>

                    </div>
                }) : <h1> Please go fill in the form </h1>}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        developer: reduxState.employerFormReducer.developer
    }
}
export default connect(mapStateToProps)(EmployerDashboard)

