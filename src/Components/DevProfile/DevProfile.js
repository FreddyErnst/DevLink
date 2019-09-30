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
            profilepic: ''


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
    render() {
        if (this.state.accountDeleted === true) {
            return <Redirect to ='/' />
        }
        return (
            <div className='DevProfileContainer'>
                <div className="Dev-Profile-Picture"><img src='https://pl.scdn.co/images/pl/default/a15be9bea5c27c3dd853b03b31e1951047c82810'/></div>
                <form onSubmit={this.handleSubmit}>
                <input name='profilepic' onChange={this.handleChange} placeholder="Insert url" />
        
                <button onClick={this.addPicture}>Add Profile Picture</button>
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