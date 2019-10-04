
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
                <div className="dash-Header">
                <h1>Developers Seeking Jobs</h1>
                <input placeholder='Search by location' />
                </div>
                {this.props.developer ? this.props.developer.map((val, index) => {
                    return <div className="DevPost">
                        <h1>{val.firstname} {val.lastname}</h1>
                        <Link to ='/Email'>Email me!</Link>
                        
                        <div className='DevImg'><img src={val.profilepic} className="Developer-Photo"/></div>
                    
                            <h3>Primary Language: {val.skill1}</h3>
                            <h4>Styling Language: {val.skill2}</h4>
                            <h4>Database language: {val.skill3}</h4>
                            <h4>DataBase language: {val.skill4}</h4>
                            <h4>Current experience: {val.experience}</h4>
                            <h4>Length of job: {val.joblength}</h4>
                            <h4>Biography: {val.bio}</h4>
                            <h4>Location: {val.state}</h4>
                    
            

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

