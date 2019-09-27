import React, { Component } from 'react'
import {updateEmployerUsername, updateEmployerEmail} from '../../redux/reducers/employerFormReducer'
import {connect} from 'react-redux'

class EmployerProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            deletedAccount: false
            

        }
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
    render() {
        return (
            <div>
                <div className='EmpProfileContainer'>
                    <form className='EmpProfileForm' onSubmit={this.handleSubmit}>
                    <h2>Edit Username:</h2>
                    <input onChange={this.handleChange} name='username'/>
                    <button type='submit' onClick={this.editEmployerUsername}>Submit Username</button>
                    <h2>Edit Email:</h2>
                    <input onChange={this.handleChange} name='email'/>
                    <button type='submit' onClick={this.editEmployerEmail}>Submit Email</button>
                    </form>
                    {console.log(this.state)}
                </div>
            </div>
        )
    }
}
export default connect(null,{updateEmployerEmail,updateEmployerUsername})(EmployerProfile)
