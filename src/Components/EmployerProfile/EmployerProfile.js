import React, { Component } from 'react'
import { updateEmployerUsername, updateEmployerEmail } from '../../redux/reducers/employerFormReducer'
import { connect } from 'react-redux'
import Axios from 'axios'

class EmployerProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            deletedAccount: false,
            employer: [],
            profilepic: '',
            github: ''
            


        }
    }
    addPicture = () => {

        Axios.post('/api/employer/picture', {
            profilepic: this.state.profilepic
        })
        alert('Photo updated!')
    }

    addGitHub = () => {
        Axios.post('/api/employer/github', {
            github: this.state.github
        })
    }

    componentDidMount() {
        Axios.get('/api/employer/info').then((response) => {
            this.setState({
                employer: response.data
            })
        })

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
            this.setState({ profilepic: resultEvent.info.url });
        }
    }
    render() {
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
                    {this.state.employer.map((val, index) => {
                        return <img src={val.profilepic} className='Employer-Picture' onerror="this.src='https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'" />
                        
                    })}
                </div>
                <div className="Profile-Info">
                    {this.state.employer.map((val, index) => {
                        return <div> <h1>{val.firstname}'s Profile</h1>
                            <h2 id="h2">Username: {val.username}</h2>
                            <h2 id="h2">Email: {val.email}</h2>
                            <h2 id="h2">Primary Language: {val.skill1}</h2>
                            <h2 id="h2">Current Location: {val.state}</h2>
                            <h2 id="h2">Current Experience: {val.experience}</h2>
                            <a href={val.github} target="_blank">Github</a>
                        </div>
                    })}
                </div>

                <div className="Profile-Functions">

                    <div className="Picture-Buttons">
                        <h1>Add Profile Picture</h1>
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
export default connect(null, { updateEmployerEmail, updateEmployerUsername })(EmployerProfile)
