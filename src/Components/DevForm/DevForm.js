import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateDevForm, addDevForm } from '../../redux/reducers/devFormReducer'

class DevForm extends Component {
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
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"],
            didClick: false

        }
    }

    handleDevFormSubmit = () => {
        this.props.addDevForm(this.state)
        this.setState({
            didClick: true
        })
    }

    handleDevFormUpdate = () => {
        this.props.updateDevForm(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }

    render() {
    
        return (
            <div className="DevForm">

                <div className="DevMenus">
                    <h2>Go to <Link to='/DevDashboard' style={{ color: 'white' }}>Dashboard</Link></h2>
                    <h4>Select your primary development language</h4>
                    <select onChange={this.handleChange} name='skill1'>
                        {this.state.primaryLanguage.map(val => <option value={val}>{val}</option>)}
                    </select>



                    <h4>Select your primary styling language</h4>
                    <select onChange={this.handleChange} name="skill2">
                        {this.state.primaryStyle.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>Select your Backend Language</h4>
                    <select onChange={this.handleChange} name='skill3'>
                        {this.state.backendLanguage.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>Please select Database Language</h4>
                    <select onChange={this.handleChange} name='skill4'>
                        {this.state.databaseLanguage.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>How much Experience do you have?</h4>
                    <select onChange={this.handleChange} name='experience'>
                        {this.state.exp.map(val => <option value={val}>{val}</option>)}
                    </select>


                    <h4>Length of job</h4>
                    <select onChange={this.handleChange} name='length'>
                        <option></option>
                        <option value="Short-term">Short-term</option>
                        <option value="Long-term">Long-term</option>
                    </select>
                    <h4>Please enter your state</h4>
                    <select onChange={this.handleChange} name='state'>
                        {this.state.states.map(val => <option value={val}>{val}</option>)}
                    </select>
                    {console.log(this.state)}

                    <div>
                        <h3>Enter bio</h3>
                        <input className='employerInput' placeholder="Bio" name='bio' onChange={this.handleChange}></input>
                    </div>
                    <button type='submit' onClick={this.handleDevFormSubmit}>Submit</button>
                    <button type='submit' onClick={this.handleDevFormUpdate}>Update</button>


                </div>
            </div>
        )
    }
}
export default connect(null, {
    updateDevForm, addDevForm
})(DevForm)
