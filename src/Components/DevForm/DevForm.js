import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class DevForm extends Component {
    render() {
        return (
            <div className="DevForm">
                
                <div className="DevMenus">
                <h2>Go to <Link>Dashboard</Link></h2>
                
                <h4>Please select a language</h4>
            <select>
                
                <option value="React">React</option>
                <option value="Python">Python</option>
                <option value="Angular">Angular</option>
                <option value="Ruby">Ruby</option>
                <option value="C++">C++</option>
                <option value="Javascript">Javascript</option>
                <option value="Java">Java</option>
            </select>
            <h4>Please select a style</h4>
            <select>
                
                <option value="Sass">Sass</option>
                <option value="Flex">Flex</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="Vanilla CSS">Vanilla CSS</option>
                <option value="Normalize">Normalize</option>
                <option value="Bulma">Bulma</option>
                <option value="Tailwind">Tailwind</option>
            </select>
            <h4>Please select Backend Language</h4>
            <select>
            <option></option>
                <option value="Nodejs">NodeJS</option>
                <option value="Ruby">Ruby</option>
                <option value="PHP">PHP</option>
                <option value="Java">Java</option>
            </select>
            <h4>Please select Database Language</h4>
            <select>
                <option></option>
                <option value="sql">SQL</option>
                <option value="mongoDB">MongoDB</option>
                <option value="oracle">Oracle</option>
            </select>
            <h4>How much Experience do you have?</h4>
            <select>
                
                <option value="6months">0-6 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="2-3 Years">2-3 Years</option>
                <option value="5 Years">5 Years +</option>
                
            </select>
            <h4>Length of job</h4>
            <select>
                
                <option value="Short-term">Short-term</option>
                <option value="Short-term">Long-term</option>
            </select>
            <div>
                <h3>Enter bio</h3>
                <input className='employerInput' placeholder="Bio"></input>
            </div>
            <button>Submit</button>
            
            </div>
            </div>
        )
    }
}
