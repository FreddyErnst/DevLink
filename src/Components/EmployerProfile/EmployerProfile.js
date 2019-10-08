import React, { Component } from 'react'
import { updateEmployerUsername, updateEmployerEmail} from '../../redux/reducers/employerFormReducer'
import {deleteEmployerAccount} from '../../redux/reducers/loginReducer'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios'

class EmployerProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            accountDeleted: false,
            employer: [],
            profilepic: '',
            github: '',
        
            
            


        }
    }
    addPicture = () => {
    
        Axios.post('/api/employer/picture', {
            profilepic: this.state.profilepic
        })
    
    
    
        alert('Photo updated!')
        window.location.reload()
    
    }

    deleteAccount = () => {
        this.props.deleteEmployerAccount()
        alert('Account has been deleted')
        this.setState({
            accountDeleted: true
        })

    }

    addGitHub = () => {
        Axios.post('/api/employer/github', {
            github: this.state.github
        })
        alert('Github added to account')
    }

    componentDidMount() {
        Axios.get('/api/employer/info').then((response) => {
            this.setState({
                employer: response.data
            })
        })
        // Axios.get('/api/employer/pic').then((response) => {
        //     this.setState({
        //         employerPicture: response.data
        //     })
        // })

    }
    editEmployerUsername = () => {
        this.props.updateEmployerUsername(this.state)
        alert('Username has been successfully updated')
    }

    editEmployerEmail = () => {
        this.props.updateEmployerEmail(this.state)
        alert('Email has been successfully updated')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
    }
    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("Picture uploaded successfully")
            console.log(resultEvent.info.url);
            this.setState({ profilepic: resultEvent.info.url
            
            });
        }
    }
    render() {
        if (this.state.accountDeleted === true) {
            return <Redirect to='/' />
        }

    
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dpindjuxl",
                uploadPreset: "of4hbr4m",
                sources: ["local", "url", "dropbox", "facebook", "instagram"]
            },
            (error, result) => {
                this.checkUploadResult(error, result);
            })
        return (
            <div className="ProfileContainer">
                <div className="Employer-Profile-Picture">
                

                {this.state.employer[0]? this.state.employer.map((val, index) => {
                        return <img src={val.profilepic} className='Employer-Picture' />
                        
                    }) :  <img src="https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg" className='Employer-Picture' />}

                </div>
                <div className="Profile-Info">
                    {this.state.employer[0] ? this.state.employer.map((val, index) => {
                        return <div> <h1>{val.firstname}'s Profile</h1>
                            <h2 id="h2">Username: {val.username}</h2>
                            <h2 id="h2">Email: {val.email}</h2>
                            <h2 id="h2">Primary Language: {val.skill1}</h2>
                            <h2 id="h2">Current Location: {val.state}</h2>
                            <h2 id="h2">Current Experience: {val.experience}</h2>
                            <a href={val.github} target="_blank">Github</a>
                        </div>
                    }): <h1>Please fill in the form</h1>}
                </div>

                <div className="Profile-Functions">

                    <div className="Picture-Buttons">
                        <h2 id="h2">Add Profile Picture</h2>
                        <button onClick={() => widget.open()}>Select Image</button>
                        <button onClick={this.addPicture}>Submit</button>
                        <form onSubmit={this.handleSubmit}>
                            <h2 id="h2">Change Username:</h2>
                            <input onChange={this.handleChange} name="username" />
                            <button type='submit' onClick={this.editEmployerUsername}>Submit Username</button>

                            <h2 id="h2">Update Email:</h2>
                            <input name="email" onChange={this.handleChange} />
                            <button type='submit' onClick={this.editEmployerEmail}>Submit Email</button>
                            <h2 id="h2">Add Github</h2>
                            <input onChange={this.handleChange} name="github" placeholder="Full link" />
                            <button type="submit" onClick={this.addGitHub}>Submit</button>
                        
                            <div>
                    <h2 id="h2">Delete Account</h2>
                    <button onClick={this.deleteAccount}>Delete</button>

                </div>

                        </form>

                    </div>

                </div>

            </div>
        )
    }
}
export default connect(null, { updateEmployerEmail, updateEmployerUsername, deleteEmployerAccount })(EmployerProfile)
