import React, { Component } from 'react'
import { updateDeveloperUsername, updateDeveloperEmail } from '../../redux/reducers/devFormReducer'
import { deleteDeveloperAccount } from '../../redux/reducers/loginReducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

class DevProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            accountDeleted: false,
            profilepic: '',
            developer: [],
            github: ''


        }

    }
    componentDidMount() {
        Axios.get('/api/developer/info').then((response) => {
            this.setState({
                developer: response.data
            })
        })

    }

    addGitHub = () => {
        Axios.post('/api/developer/github', {
            github: this.state.github
        })
    }


    editDeveloperUsername = () => {
        this.props.updateDeveloperUsername(this.state)
        alert('Username has been successfully updated')
    }

    editDeveloperEmail = (e) => {
        this.props.updateDeveloperEmail(this.state)
        alert('Email has been updated')

    }

    deleteAccount = () => {
        this.props.deleteDeveloperAccount()
        alert('Account has been deleted')
        this.setState({
            accountDeleted: true
        })

    }
    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
    }

    handleChange = e => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addPicture = () => {

        Axios.post('/api/developer/picture', {
            profilepic: this.state.profilepic
        })
        alert('Photo updated!')
    }

    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("Picture uploaded successfully")
            console.log(resultEvent.info.url);
            this.setState({ profilepic: resultEvent.info.url });
        }
    };
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
            console.log(this.state.developer)
        return (
            <div className="ProfileContainer">
                <div className="Dev-Profile-Picture">
                    {this.state.developer[0] ? this.state.developer.map((val, index) => {
                        return <img src={val.profilepic} className='Dev-Picture' />
                        
                    }) :  <img src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg" className='Dev-Picture' />}


                </div>

                <div className="Profile-Info">
                    {this.state.developer[0] ? this.state.developer.map((val, index) => {
                        return <div> <h1>{val.firstname}'s Profile</h1>
                            <h2 id="h2">Username: {val.username}</h2>
                            <h2 id="h2">Email: {val.email}</h2>
                            <h2 id="h2">Primary Language: {val.skill1}</h2>
                            <h2 id="h2">Current Location: {val.state}</h2>
                            <h2 id="h2">Current Experience: {val.experience}</h2>
                            <a href={val.github} target="_blank">Github</a>

                        </div>
                    }) : <h1>Please fill in the form</h1>}
                </div>

                <div className="Profile-Functions">

                    <div className="Picture-Buttons">
                        <h2 id="h2">Add Profile Picture</h2>
                        <button onClick={() => widget.open()}>Select Image</button>
                        <button onClick={this.addPicture}>Submit</button>
                        <form onSubmit={this.handleSubmit} class="Function-Form">
                            <h2 id="h2">Change Username:</h2>
                            <input onChange={this.handleChange} name="username" placeholder="Username" />
                            <button type='submit' onClick={this.editDeveloperUsername}>Submit Username</button>

                            <h2 id="h2">Update Email:</h2>
                            <input name="email" onChange={this.handleChange} placeholder="Email" />
                            <button type='submit' onClick={this.editDeveloperEmail}>Submit Email</button>
                        
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

export default connect(null, { updateDeveloperUsername, updateDeveloperEmail, deleteDeveloperAccount })(DevProfile)