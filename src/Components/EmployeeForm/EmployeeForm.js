import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {updateEmployerForm, addEmployerForm, getDevBySkill} from '../../redux/reducers/employerFormReducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class EmployeeForm extends Component {
    constructor() {
        super()
        this.state = {
            skill1: '',
            primaryLanguage: ['', 'Python', 'Ruby', 'Angular', 'React', 'Javascript', 'Java', 'C++', 'C#', 'Swift', 'PHP', 'Rust'],
            skill2: '',
            primaryStyle: ['', 'Vanilla CSS', 'Flex', 'SASS', 'BootStrap', 'Bulma', 'Tailwind', 'Normalize'],
            skill3: '',
            backendLanguage: ['', 'NodeJS', 'PHP', "Java", 'Ruby'],
            skill4: '',
            databaseLanguage: ['', 'MYSQL','Oracle', 'MS Access', 'dBase', 'FoxPro'],
            experience: '',
            exp: ['', '6 Months', '1 Year', '2-3 Years', '5 Years +'],
            length: '',
            bio: '',
            state: '',
            states: ["", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
                "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
                "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
                "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"],
            num: 0,
            didClick: false
        }
    }

    handleEmployerForm = () => {
        this.props.addEmployerForm(this.state)
        this.props.getDevBySkill(this.state.skill1)
        this.setState({
            didClick: true
        })
    }

    handleEmployerFormUpdate = () => {
        this.props.updateEmployerForm(this.state)
        this.props.getDevBySkill(this.state.skill1)
        this.setState({
            didClick: true
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    
    }
    
    handleSubmit() {
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
            return <Redirect to='/EmployerDashboard'/>
        }
        return (
            <div className="EmployerForm">
            {(() => {
                switch (this.state.num) {
                    case 0: return <div>
                        <h1>Click Here to get started</h1> <button onClick={this.handleIncrement}>Next</button>
                    </div>

                    case 1: return <div><h1>Primary development language</h1>
                        <select onChange={this.handleChange} name='skill1'>
                            {this.state.primaryLanguage.map(val => <option value={val}>{val}</option>)}
                        </select>
                        <div>
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                        
                        </div>
                    </div>

                    case 2: return <div>
                        <h4>Styling</h4>
                        <select onChange={this.handleChange} name="skill2">
                            {this.state.primaryStyle.map(val => <option value={val}>{val}</option>)}
                        </select>
                        <div>
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                        
                        </div>
                    </div>

                    case 3: return <div>
                        <h4>Preferred Backend Language</h4>
                        <select onChange={this.handleChange} name='skill3'>
                            {this.state.backendLanguage.map(val => <option value={val}>{val}</option>)}
                        </select>
                        <div>
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                    
                        </div>
                    </div>

                    case 4: return <div>
                        <h4>Database</h4>
                        <select onChange={this.handleChange} name='skill4'>
                            {this.state.databaseLanguage.map(val => <option value={val}>{val}</option>)}
                        </select>
                        <div>
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                        
                        </div>
                    </div>

                    case 5: return <div>
                        <h4>How much Experience are you looking for ?</h4>
                        <select onChange={this.handleChange} name='experience'>
                            {this.state.exp.map(val => <option value={val}>{val}</option>)}
                        </select>
                        <div>
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                        
                        </div>
                    </div>

                    case 6: return <div>
                        <h4>Length of job</h4>
                        <select onChange={this.handleChange} name='length'>
                            <option></option>
                            <option value="Short-term">Short-term</option>
                            <option value="Long-term">Long-term</option>
                        </select>
                        <div>
                        
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                        </div>
                    </div>
                    case 7: return <div>
                        <h4>Please enter your state</h4>
                        <select onChange={this.handleChange} name='state'>
                            {this.state.states.map(val => <option value={val}>{val}</option>)}
                        </select>
                        <div>
                        <button onClick={this.handleDecrement}>Previous</button>
                        <button onClick={this.handleIncrement}>Next</button>
                        
                        </div>
                    </div>

                    case 8: return <div><h3>Enter bio</h3>

                        <input className='employerInput' placeholder="Bio" name='bio' onChange={this.handleChange}></input>
                        <div>
                            <button onClick={this.handleDecrement}>Previous</button>
                            <button type='submit' onClick={this.handleEmployerForm}>Submit</button>
                            <button type='submit' onClick={this.handleEmployerFormUpdate}>Update</button>
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
    shouldRedirect: state.employerFormReducer.shouldRedirect
}), {
    updateEmployerForm, addEmployerForm, getDevBySkill
})(EmployeeForm)

