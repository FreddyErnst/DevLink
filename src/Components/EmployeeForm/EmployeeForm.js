import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {updateEmployerForm, addEmployerForm} from '../../redux/reducers/employerFormReducer'
import {connect} from 'react-redux'

class EmployeeForm extends Component {
    constructor() {
        super()
        this.state = {
            skill1: '',
            primaryLanguage: ['', 'Python', 'Ruby', 'Angular', 'React', 'Javascript', 'Java', 'C++', 'C#'],
            skill2: '',
            primaryStyle: ['', 'Vanilla CSS', 'Flex', 'SASS', 'BootStrap', 'Bulma', 'Tailwind', 'Normalize'],
            skill3: '',
            backendLanguage: ['', 'NodeJS', 'PHP', "Java", 'Ruby'],
            skill4: '',
            databaseLanguage: ['', 'SQL', 'MongoDB', 'Oracle'],
            experience: '',
            exp: ['', '6 Months', '1 Year', '2-3 Years', '5 Years +'],
            length: '',
            bio: '',
            state: '',
            states: ["", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
                "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
                "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
                "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]
        }
    }

    handleEmployerForm = () => {
        this.props.addEmployerForm(this.state)
    }

    handleEmployerFormUpdate = () => {
        this.props.updateEmployerForm(this.state)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    
    }

    clear = () => {
        this.setState({
            skill1: '',
            skill2: '',
            skill3: '',
            skill4: '',
            experience: '',
            length: '',
            bio: '',
            state: ''
        })
    }

    handleSubmit() {
    }
    render() {
        return (
            <div className="EmployerForm">

                <div className="EmployerMenus">
                    <h2>Go to <Link to='/EmployerDashboard'>Dashboard</Link></h2>

                    <h4>Select your wanted primary development language</h4>
                    <select onChange={this.handleChange} name='skill1'>
                        {this.state.primaryLanguage.map(val => <option value={val}>{val}</option>)}
                    </select>



                    <h4>Select your wanted primary styling language</h4>
                    <select onChange={this.handleChange} name="skill2">
                        {this.state.primaryStyle.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>Select your wanted Backend Language</h4>
                    <select onChange={this.handleChange} name='skill3'>
                        {this.state.backendLanguage.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>Please select your wanted Database Language</h4>
                    <select onChange={this.handleChange} name='skill4'>
                        {this.state.databaseLanguage.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>How much Experience are you looking for?</h4>
                    <select onChange={this.handleChange} name='experience'>
                        {this.state.exp.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>How long do you want to hire?</h4>
                    <select onChange={this.handleChange} name='length'>
                        <option></option>
                        <option value="Short-term">Short-term</option>
                        <option value="Short-term">Long-term</option>
                    </select>
                    <h4>What state are you located in?</h4>
                    <select onChange={this.handleChange} name='state'>
                        {this.state.states.map(val => <option value={val}>{val}</option>)}
                    </select> 
            
                    <div>
                        <h3>Enter description about the job</h3>
                        <input className='employerInput' placeholder="Bio" name="bio" onChange={this.handleChange}></input>
                    </div>
                    <button type="submit" onClick={this.handleEmployerForm}>Submit</button>
                    <button type='submit' onClick={this.handleEmployerFormUpdate}>Update</button>
                    {console.log(this.state)}
                </div>

            </div>
        )
    }
}

export default connect(null, {
    updateEmployerForm, addEmployerForm
})(EmployeeForm)

