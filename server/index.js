require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive')
const session = require('express-session')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authController = require('./controllers/authController')
const Devcontroller = require('./controllers/DevController')
const EmployeeController = require('./controllers/EmployeeController')


app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('PogChamp')
})

//email

app.post('/api/email', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Nodemailer1723@gmail.com',
                pass: 'Nib87nib87nib87'
            }
           
        })
        let mailOptions = {
            
            from: 'test@testaccount.com',
            to: 'Nodemailer1723@gmail.com',
            replyTo: 'test@testaccount.com',
            subject: 'New message',
            text: req.body.message,
            html: htmlEmail

        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message Sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})


// Developer Login Paths
app.get('/auth/dev', authController.getDev)
app.post('/auth/registerDev', authController.registerDev)
app.post('/auth/loginDev', authController.loginDev)
app.post('/auth/logoutDev', authController.logoutDev)

//Employee Login Paths
app.get('/auth/employer', authController.getEmployer)
app.post('/auth/registerEmployer', authController.registerEmployer)
app.post('/auth/loginEmployer', authController.loginEmployer)
app.post('/auth/logoutEmployer', authController.logoutEmployer)

// Developer Posts
app.get('/api/devposts/', Devcontroller.getDevPosts)
app.get('/api/devpost/:skill1', Devcontroller.getDevPostBySkill)
app.post('/api/devposts/', Devcontroller.devPost)
app.put('/api/devposts/', Devcontroller.updateDevForm)


// Employer Posts
app.get('/api/employerposts/', EmployeeController.getEmployerPosts)
app.get('/api/employerpost/:skill1', EmployeeController.getEmployerPostBySkill)
app.post('/api/employerposts/', EmployeeController.employerPost)
app.put('/api/employerposts', EmployeeController.updateEmployerForm)

// Dev Profile
app.put('/api/developer/username', Devcontroller.editDevUsername)
app.put('/api/developer/email', Devcontroller.editDevEmail)
app.delete('/auth/developer/', Devcontroller.deleteDeveloper)
app.post('/api/developer/picture', Devcontroller.addDevPicture)
app.get('/api/developer/info', Devcontroller.uniqueDevInformation)

//Employer Profile
app.put('/api/employer/username', EmployeeController.editEmployerUsername)
app.put('/api/employer/email', EmployeeController.editEmployerEmail)
app.delete('/auth/employer', EmployeeController.deleteEmployer)
app.get('/api/employer/info', EmployeeController.uniqueEmployerInfo)
app.post('/api/employer/picture', EmployeeController.addEmployerPicture)

//Employer Dashboard
app.get('/api/Developers', Devcontroller.getDevs)
//Dev Dashboard
// app.get('/api/Employers', EmployeeController.getEmployers)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})
