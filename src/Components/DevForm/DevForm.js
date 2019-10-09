import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { updateDevForm, addDevForm, getEmployerBySkill } from '../../redux/reducers/devFormReducer'

class DevForm extends Component {
    constructor() {
        super()
        this.state = {
            skill1: '',
            primaryLanguage: ['', 'Python', 'Ruby', 'Angular', 'React', 'Javascript', 'Java', 'C++', 'C#', 'Swift', 'PHP', 'Rust',],
            skill2: '',
            primaryStyle: ['', 'Vanilla CSS', 'Flex', 'SASS', 'BootStrap', 'Bulma', 'Tailwind', 'Normalize'],
            skill3: '',
            backendLanguage: ['', 'NodeJS', 'PHP', "Java", 'Ruby'],
            skill4: '',
            databaseLanguage: ['', 'MYSQL','Oracle', 'MS Access', 'dBase', 'FoxPro'],
            experience: '',
            exp: ['', '6 Months', '1 Year', '2-3 Years', '5 Years +'],
            length: '',
            lengthOfJob: ['', 'Short-Term', "Long-Term"],
            bio: '',
            state: '',
            states: ["", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
                "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
                "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
                "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"],
            didClick: false,
            num: 0

        }
    }

    handleDevFormSubmit = () => {
        this.props.addDevForm(this.state)
        // console.log(this.state.skill1)
        this.props.getEmployerBySkill(this.state.skill1)
        this.setState({
            didClick: true
        })
    }

    handleDevFormUpdate = () => {
        this.props.updateDevForm(this.state)
        this.props.getEmployerBySkill(this.state.skill1)
        this.setState({
            didClick: true
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }

    handleIncrement = () => {
        this.setState({
            num: this.state.num += 1
        })
    }

    handleDecrement = () => {
        this.setState({
            num: this.state.num -= 1
        })
    }

    render() {
        if (this.props.shouldRedirect === true) {
            return <Redirect to='/DevDashboard'/>
        }
        return (
            <div className="DevForm">
                {(() => {
                    switch (this.state.num) {
                        case 0: return <div>
                            <h1>Click here to get started</h1> <button onClick={this.handleIncrement}>
                                Start
                            </button>
                        </div>

                        case 1: return <div><h1>Select your primary development language</h1>
                            <select onChange={this.handleChange} name='skill1'>
                                {this.state.primaryLanguage.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                            
                            </div>
                        </div>

                        case 2: return <div>
                            <h1>Select your primary styling language</h1>
                            <select onChange={this.handleChange} name="skill2">
                                {this.state.primaryStyle.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                            
                            </div>
                        </div>

                        case 3: return <div>
                            <h1>Select your backend language</h1>
                            <select onChange={this.handleChange} name='skill3'>
                                {this.state.backendLanguage.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                        
                            </div>
                        </div>

                        case 4: return <div>
                            <h1>Please select database preference</h1>
                            <select onChange={this.handleChange} name='skill4'>
                                {this.state.databaseLanguage.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                            
                            </div>
                        </div>

                        case 5: return <div>
                            <h1>How much experience do you have?</h1>
                            <select onChange={this.handleChange} name='experience'>
                                {this.state.exp.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                            
                            </div>
                        </div>

                        case 6: return <div>
                            <h1>Length of job</h1>
                            <select onChange={this.handleChange} name='length'>
                                {this.state.lengthOfJob.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                            </div>
                        </div>
                        case 7: return <div>
                            <h1>Please enter your state</h1>
                            <select onChange={this.handleChange} name='state'>
                                {this.state.states.map(val => <option value={val}>{val}</option>)}
                            </select>
                            <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button onClick={this.handleIncrement}>Next</button>
                            
                            </div>
                        </div>

                        case 8: return <div><h1>Enter bio</h1>

                            <input className='employerInput' placeholder="Bio" name='bio' onChange={this.handleChange} placeholder="Bio"></input>
                            <div>
                                <button onClick={this.handleDecrement}>Previous</button>
                                <button type='submit' onClick={this.handleDevFormSubmit}>Submit</button>
                                <button type='submit' onClick={this.handleDevFormUpdate}>Update</button>
                            </div>

                        </div>

                        default: return <h1>Please fill out the form</h1>
                    }
                })()}
            </div>
        )
    }
}
export default connect(state => ({
    shouldRedirect: state.devFormReducer.shouldRedirect
}), {
    updateDevForm, addDevForm, getEmployerBySkill
})(DevForm)
