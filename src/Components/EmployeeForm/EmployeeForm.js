import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {updateEmployerForm, addEmployerForm} from '../../redux/reducers/employerFormReducer'
import {connect} from 'react-redux'

class EmployeeForm extends Component {
    constructor() {
        super()
        this.state = {
            skill1: '',
            skill2: '',
            skill3: '',
            skill4: '',
            experience: '',
            length: '',
            bio: '',
            state: ''
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
                    <h2>Go to <Link to='/EmployeeDashboard'>Dashboard</Link></h2>

                    <h4>Please select a language</h4>
                    <select className="Language" name="skill1" onChange={this.handleChange}>
                        <option></option>
                        <option value="React">React</option>
                        <option value="Python">Python</option>
                        <option value="Angular">Angular</option>
                        <option value="Ruby">Ruby</option>
                        <option value="C++">C++</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Java">Java</option>
                    </select>
                    <h4>Please select a style</h4>
                    <select name="skill2" onChange={this.handleChange}>
                        <option></option>
                        <option value="Sass">Sass</option>
                        <option value="Flex">Flex</option>
                        <option value="Bootstrap">Bootstrap</option>
                        <option value="Vanilla CSS">Vanilla CSS</option>
                        <option value="Normalize">Normalize</option>
                        <option value="Bulma">Bulma</option>
                        <option value="Tailwind">Tailwind</option>
                    </select>
                    <h4>Backend Language</h4>
                    <select name="skill3" onChange={this.handleChange}>
                        <option></option>
                        <option value="Nodejs">NodeJS</option>
                        <option value="Ruby">Ruby</option>
                        <option value="PHP">PHP</option>
                        <option value="Java">Java</option>
                    </select>
                    <h4>Database Language</h4>
                    <select name="skill4" onChange={this.handleChange}>
                        <option></option>
                        <option value="SQL">SQL</option>
                        <option value="mongoDB">MongoDB</option>
                        <option value="oracle">Oracle</option>
                    </select>
                    <h4>Experience Coding</h4>
                    <select name="experience" onChange={this.handleChange}>
                        <option></option>
                        <option value="6months">0-6 Months</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2-3 Years">2-3 Years</option>
                        <option value="5 Years">5 Years +</option>

                    </select>
                    <h4>Length of job</h4>
                    <select name="length" onChange={this.handleChange}>
                        <option></option>
                        <option value="Short-Term">Short-term</option>
                        <option value="Long-Term">Long-term</option>

                    </select>
                    <h4>Please enter your state</h4>
                    <select name="state" onChange={this.handleChange}>
                        <option></option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
            
                    <div>
                        <h3>Enter bio</h3>
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

