import React, { Component } from 'react'
import Axios from 'axios';

export default class DevDashboard extends Component {
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
                <input placeholder='Search State'/>
                {this.state.devPost ? this.state.devPost.map((val, index) => {
                    return <div className="DevPost">
                        <h2>{val.firstname} {val.lastname}</h2>
                        <div className='DevImg'><img src='https://static-cdn.jtvnw.net/jtv_user_pictures/c37f21b1-5b33-4750-9cbc-dd3ebfdd7739-profile_image-300x300.png'/></div>
                        <h4>Primary Language: {val.skill1}</h4>
                        <h4>Styling Language:{val.skill2}</h4>
                        <h4>Database language:{val.skill3}</h4>
                        <h4>DataBase language:{val.skill4}</h4>
                        <h4>Current experience:{val.experience}</h4>
                        <h4>Length of job:{val.joblength}</h4>
                        <h4>Biography:{val.bio}</h4>
                        <h4>Location: {val.state}</h4>
                        <div><button>Email me!</button></div>
                    
                    </div> 
                }) : <h1> Please go fill in the form </h1>}
            </div>
        )
    }
}
