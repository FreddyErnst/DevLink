import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateDevForm, addDevForm} from '../../redux/reducers/devFormReducer'

class DevForm extends Component {
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

    handleDevFormSubmit = () => {
        this.props.addDevForm(this.state)
    }

    handleDevFormUpdate = () => {
        this.props.updateDevForm(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    
    }

    // clear = () => {
    //     this.setState({
    //         skill1: '',
    //         skill2: '',
    //         skill3: '',
    //         skill4: '',
    //         experience: '',
    //         length: '',
    //         bio: '',
    //         state: ''
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     e.target.reset()

    // }
    render() {
        return (
            <div className="DevForm">
                
                <div className="DevMenus">
                <h2>Go to <Link to ='/DevDashboard' style={{  color: 'white' }}>Dashboard</Link></h2>
                
                <h4>Select your primary development language</h4>
            <select onChange={this.handleChange} name='skill1' defaultValue='Select Language'>
                <option></option>
                <option value="React" >React</option>
                <option value="Python" >Python</option>
                <option value="Angular" >Angular</option>
                <option value="Ruby" >Ruby</option>
                <option value="C++" >C++</option>
                <option value="Javascript" >Javascript</option>
                <option value="Java">Java</option>
        
            </select>
            <h4>Select your primary styling language</h4>
            <select onChange={this.handleChange} name="skill2">
                <option></option>   
                <option value="Sass">Sass</option>
                <option value="Flex">Flex</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="Vanilla CSS">Vanilla CSS</option>
                <option value="Normalize">Normalize</option>
                <option value="Bulma">Bulma</option>
                <option value="Tailwind">Tailwind</option>
            </select>
            <h4>Select your Backend Language</h4>
            <select onChange={this.handleChange} name='skill3'>
                <option></option>
                <option value="Nodejs">NodeJS</option>
                <option value="Ruby">Ruby</option>
                <option value="PHP">PHP</option>
                <option value="Java">Java</option>
            </select>
            <h4>Please select Database Language</h4>
            <select onChange={this.handleChange} name='skill4'>
                <option></option>
                <option value="sql">SQL</option>
                <option value="mongoDB">MongoDB</option>
                <option value="oracle">Oracle</option>
            </select>
            <h4>How much Experience do you have?</h4>
            <select onChange={this.handleChange} name='experience'>
                <option></option>
                <option value="6months">0-6 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="2-3 Years">2-3 Years</option>
                <option value="5 Years">5 Years +</option>
                
            </select>
            <h4>Length of job</h4>
            <select onChange={this.handleChange} name='length'>
                <option></option>
                <option value="Short-term">Short-term</option>
                <option value="Short-term">Long-term</option>
            </select>
            <h4>Please enter your state</h4>
                    <select onChange={this.handleChange} name='state'>
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
                    {console.log(this.state)}
                    
            <div>
                <h3>Enter bio</h3>
                <input className='employerInput' placeholder="Bio" name='bio' onChange={this.handleChange}></input>
            </div>
            <button type='submit' onClick={this.handleDevFormSubmit}>Submit</button>
            <button type='submit' onClick={this.handleDevFormUpdate}>Update</button>
            {/* <button onClick={this.handleSubmit}>Clear</button> */}
            
            </div>
            </div>
        )
    }
}
export default connect(null, {
    updateDevForm, addDevForm
})(DevForm)
