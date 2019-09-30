
import React, { Component } from 'react'
import Axios from 'axios';

export default class EmployerDashboard extends Component {
    constructor() {
        super()
        this.state = {
            devPost: [],
            // developer: []

        }
    }
    componentDidMount() {
        Axios.get('/api/devposts').then((response) => {
            this.setState({
                devPost: response.data
            })
        })
        
    }

    render() {
        return (
            <div className="DevPostContainer">
                <h1>Developers Seeking Jobs</h1>
                <input placeholder='Search by location'/>
                {this.state.devPost ? this.state.devPost.map((val, index) => {
                    return <div className="DevPost">
                        <h1>{val.firstname} {val.lastname}</h1>
                        <div className='DevImg'><img src='https://static-cdn.jtvnw.net/jtv_user_pictures/c37f21b1-5b33-4750-9cbc-dd3ebfdd7739-profile_image-300x300.png'/></div>
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

