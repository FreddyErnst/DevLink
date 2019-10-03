import React, { Component } from 'react'
import '../../redux/reducers/devFormReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class DevDashboard extends Component {
    constructor() {
        super()
        this.state = {
            // employerPost: [],
            // developer: []

        }
    }
    // componentDidMount() {
    //     Axios.get('/api/employerposts').then((response) => {
    //         this.setState({
    //             employerPost: response.data
    //         })
    //     })
        
    // }

    render() {
        return (
            <div className="EmployerPostContainer">
                <h1>Employers Seeking to Hire</h1>
                <input placeholder='Search by location'/>
                {this.props.employer ? this.props.employer.map((val, index) => {
                    return <div className="EmployerPost">
                        <h1>{val.firstname} {val.lastname}</h1>
                        <div className='EmployerImg'><img src={val.profilepic} className="Employer-Image"/></div>
                        <h2>Primary Language: {val.skill1}</h2>
                        <h2>Styling Language: {val.skill2}</h2>
                        <h2>Database language: {val.skill3}</h2>
                        <h2>DataBase language: {val.skill4}</h2>
                        <h2>Current experience: {val.experience}</h2>
                        <h2>Length of job: {val.joblength}</h2>
                        <h2>Biography: {val.bio}</h2>
                        <h2>Location: {val.state}</h2>
                        <Link to ='/Email'>Email me!</Link>
                    
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
