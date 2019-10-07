import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class EmailForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    handleSubmit = e => {
        e.preventDefault()

        const {name, email, message} = this.state

        axios.post('/api/email', {
            name, email, message
        })
        e.target.reset()
        alert('Email sent')
    }
    render() {
        return (
            <div className="Email-Container">
                <div>
                <button onClick={this.goBack} className="Email-Goback"><h1>Go back!</h1></button>
                </div>
            
        <Form onSubmit={this.handleSubmit} className="Email-Form">
        
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input 
                type="text"
                name="name"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="name">Email</Label>
                <Input 
                type="email"
                name="email"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="name">Message:</Label>
                <Input 
                type="text"
                name="message"
                onChange={this.handleChange}
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        </div>
        )
    }
}
