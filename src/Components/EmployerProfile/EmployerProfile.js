import React, { Component } from 'react'
import { updateEmployerUsername, updateEmployerEmail } from '../../redux/reducers/employerFormReducer'
import { connect } from 'react-redux'
import Axios from 'axios'

class EmployerProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            deletedAccount: false,
            employer: [],
            profilepic: ''


        }
    }
    addPicture = () => {

        Axios.post('/api/employer/picture', {
            profilepic: this.state.profilepic
        })
        alert('Photo updated!')
    }

    componentDidMount() {
        Axios.get('/api/employer/info').then((response) => {
            this.setState({
                employer: response.data
            })
        })

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
    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("Picture uploaded successfully")
            console.log(resultEvent.info.url);
            this.setState({ profilepic: resultEvent.info.url });
        }
    }
    render() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dpindjuxl",
                uploadPreset: "of4hbr4m",
                sources: ["local", "url", "dropbox", "facebook", "instagram"]
            },
            (error, result) => {
                this.checkUploadResult(error, result);
            })
        return (
            <div className="EmpProfileContainer">
                {/* <div className='EmpProfileContainer'> */}
                    {this.state.employer.map((val, index) => {
                        return <div className="Emp-Profile-Picture"><img src={val.profilepic} className="Emp-Picture" /></div>
                    })}
                
                        <button onClick={() => widget.open()}>Select Image</button>
                        <button onClick={this.addPicture} type='submit'>Submit</button>
                
                    <div className='Prof-Container' />
                    <form onSubmit={this.handleSubmit}>
                        <h2>Update Username:</h2>
                        <input onChange={this.handleChange} name='username' />
                        <button type='submit' onClick={this.editEmployerUsername}>Submit Username</button>
                        <h2>Update Email:</h2>
                        <input onChange={this.handleChange} name='email' />
                        <button type='submit' onClick={this.editEmployerEmail}>Submit Email</button>
                    </form>

                {/* </div> */}
                {console.log(this.state)}
            </div>
        )
    }
}
export default connect(null, { updateEmployerEmail, updateEmployerUsername })(EmployerProfile)
