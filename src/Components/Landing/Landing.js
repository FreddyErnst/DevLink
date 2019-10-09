import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateDeveloper, updateEmployer} from '../../redux/reducers/loginReducer'



export class Landing extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            isDeveloper: false,
            isEmployer: false,
            didClick: false,
            shouldRedirect: false,
            clickedRegister: false
        }
    }
    handleDevLogin = () => {
        const {username, password} = this.state
        if(username === '' && password === '') {
            this.setState({didClick: true})
            alert('Please login')
        } else {
            axios.post('/auth/loginDev', {username, password})
            .then(response => {
                this.props.updateDeveloper(response.data)
                console.log(response.data)
                this.setState({shouldRedirect: true, isDeveloper: true})
            })
            .catch(error => console.log(error))
        }

    }

    handleEmployerLogin = () => {
        const {username, password} = this.state
        console.log(username, password)
        if(username === '' && password === '') {
            this.setState({didClick: true})
            alert('Please login')
        } else {
            axios.post('/auth/loginEmployer', {username, password})
            .then(response => {
                this.props.updateEmployer(response.data)
                console.log(response.data)
                this.setState({shouldRedirect: true, isEmployer: true})
            })
            .catch(error => console.log(error))
        } 

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDevRegister = () => {
        const{username, password, firstname, lastname, email} = this.state
        if(username !== '' && password !== '' && firstname !== '' && lastname !== '' && email !== '' ) {
            axios.post('/auth/registerDev', {
                username, password, firstname, lastname, email
            }).then( response => {
                this.props.updateDeveloper({username, password, firstname, lastname, email})
                this.setState({
                    shouldRedirect: true,
                    isDeveloper: true
                })
            })
            .catch(error => console.log(error))
        } else {
            alert ('Please Register an account')
        }

    }

    handleEmployerRegister = () => {
        const{username, password, firstname, lastname, email} = this.state
        if(username !== '' && password !== '' && firstname !== '' && lastname !== '' && email !== '' ) {
            axios.post('/auth/registerEmployer', {
                username, password, firstname, lastname, email
            }).then( response => {
                this.props.updateEmployer({username, password, firstname, lastname, email})
                this.setState({
                    shouldRedirect: true,
                    isEmployer: true
                })
            })
            .catch(error => console.log(error))
        } else {
            alert ('Please Register an account')
        }
    }

    clickedRegister = () => {
        this.setState({
            clickedRegister: true
        })
    }
    render() {
        if(this.state.shouldRedirect === true && this.state.isDeveloper === true) {
            return <Redirect to='/DevForm'/>
        } else if (this.state.shouldRedirect === true && this.state.isEmployer === true) {
            return <Redirect to='/EmployeeForm'/>
        }
        
        return (
            <div className="LandingContainer">
            <div className="DevLogin">
                <h1>Developer</h1>
                <label>Username:</label>
                <input
                autoComplete = "off"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                />
                <label>Password:</label>
                <input
                type = "password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                
                ></input>

                {/* <button onClick={this.clickedRegister}>Register Account</button> */}
                
                
                <button onClick={this.handleDevLogin} id="button">Login</button>
                <label>First Name:</label>
                <input
                autoComplete = "off"
                name="firstname"
                placeholder="First Name"
                onChange={this.handleChange}
                
                ></input>
                <label>Last Name:</label>
                <input
                autoComplete = "off"
                name="lastname"
                placeholder="Last Name"
                onChange={this.handleChange}
                
                />
                <label>Email:</label>
                <input
                autoComplete = "off"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                
                />
                <label>Username:</label>
                <input
                autoComplete = "off"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                />
                <label>Password:</label>
                <input
                autoComplete = "off"
                
                type = "password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                
                ></input>
                <div>
                <button onClick={this.handleDevRegister} id="button">Register</button>
            
                </div>
            </div>
            <div className="EmployeeLogin">
                <h1>Employer</h1>
                <label>Username:</label>
                <input
                autoComplete = "off"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                />
                <label>Password:</label>
                <input
                type="password"
                autoComplete = "off"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                
                ></input>
                <button onClick={this.handleEmployerLogin} id="button">Login</button>
                <label>First Name:</label>
                <input
                autoComplete = "off"
                name="firstname"
                placeholder="First Name"
                onChange={this.handleChange}
                
                />
                <label>Last Name:</label>
                <input
                autoComplete = "off"
                name="lastname"
                placeholder="Last Name"
                onChange={this.handleChange}
                
                />
                <label>Email:</label>
                <input
                autoComplete = "off"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}

                />
                <label>Username:</label>
                <input
                autoComplete = "off"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                />
                <label>Password:</label>
                <input
                autoComplete = "off"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                
                ></input>
                <div>
                <button onClick={this.handleEmployerRegister} id="button">Register</button>
                </div>

            </div>
            </div>
        )
    }
}

export default connect(null, {
    updateDeveloper, updateEmployer
})(Landing)
