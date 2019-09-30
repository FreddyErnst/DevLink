import React, { Component } from 'react'
import Axios from 'axios';

export default class DevDashboard extends Component {
    constructor() {
        super()
        this.state = {
            employerPost: [],
            // developer: []

        }
    }
    componentDidMount() {
        Axios.get('/api/employerposts').then((response) => {
            this.setState({
                employerPost: response.data
            })
        })
        
    }

    render() {
        return (
            <div className="EmployerPostContainer">
                <h1>Employers Seeking to Hire</h1>
                <input placeholder='Search by location'/>
                {this.state.employerPost ? this.state.employerPost.map((val, index) => {
                    return <div className="EmployerPost">
                        <h1>{val.firstname} {val.lastname}</h1>
                        <div className='EmployerImg'><img src='https://static-cdn.jtvnw.net/jtv_user_pictures/c37f21b1-5b33-4750-9cbc-dd3ebfdd7739-profile_image-300x300.png'/></div>
                        <h2>Primary Language: {val.skill1}</h2>
                        <h2>Styling Language: {val.skill2}</h2>
                        <h2>Database language: {val.skill3}</h2>
                        <h2>DataBase language: {val.skill4}</h2>
                        <h2>Current experience: {val.experience}</h2>
                        <h2>Length of job: {val.joblength}</h2>
                        <h2>Biography: {val.bio}</h2>
                        <h2>Location: {val.state}</h2>
                        <div><button>Email me!</button></div>
                    
                    </div> 
                }) : <h1> Please go fill in the form </h1>}
            </div>
        )
    }
}
