import React, { Component } from 'react'
import { updateDeveloperUsername, updateDeveloperEmail } from '../../redux/reducers/devFormReducer'
import {deleteDeveloperAccount} from '../../redux/reducers/loginReducer'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import Axios from 'axios';

class DevProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            accountDeleted: false,
            profilepic: '',
            developer: []


        }

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
    console.log(e.target.value)
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

    componentDidMount() {
        Axios.get('/api/developer/info').then((response) => {
            this.setState({
                developer: response.data
            })
        })
        
    }
    checkUploadResult = (error,resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("Picture uploaded successfully")
            console.log(resultEvent.info.url);
            this.setState({profilepic: resultEvent.info.url});
        }
    };
    render() {
        if (this.state.accountDeleted === true) {
            return <Redirect to ='/' />
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
            <div className='DevProfileContainer'>
                {/* <div className="Dev-Profile-Picture"><img src='https://pl.scdn.co/images/pl/default/a15be9bea5c27c3dd853b03b31e1951047c82810'/></div> */}
                {this.state.developer.map((val, index) => {
                    return <div className="Dev-Profile-Picture"><img src={val.profilepic} className='Dev-Picture'/>
                    
                    
                    </div>
                })}
                <form onSubmit={this.handleSubmit}>
                {/* <input name='profilepic' onChange={this.handleChange} placeholder="Insert url" /> */}
                <button onClick ={() =>widget.open()}>Select Image</button>
                <button onClick={this.addPicture}>Submit</button> 
                
                {/* <button onClick={}></button> */}
                <div className='ProfileContainer'>
                    {/* <div className="Dev-Profile-Picture"></div> */}
                    <form onSubmit={this.handleSubmit}>
                    <h2>Change Username:</h2>
                    <input onChange={this.handleChange} name="username"/>
                    <button type='submit' onClick={this.editDeveloperUsername}>Submit Username</button>
            
                    <h2>Update Email:</h2>
                    <input name="email" onChange={this.handleChange}/>
                    <button type='submit' onClick={this.editDeveloperEmail}>Submit Email</button>
                    {console.log(this.state)}
                    
                    </form>
                    
                    </div>
                    <div>
                    <h2>Delete Account</h2>
                    <button onClick={this.deleteAccount}>Delete</button>

                </div>
                </form>
            </div>
    
        )
    }
}

export default connect(null,{updateDeveloperUsername, updateDeveloperEmail, deleteDeveloperAccount})(DevProfile)