require ('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authController = require('./controllers/authController')
const Devcontroller = require('./controllers/DevController')
const EmployeeController = require('./controllers/EmployeeController')

app.use(express.json())

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
app.get('/api/devposts/:tech_id', Devcontroller.getDevPost)
app.post('/api/devposts/:tech_id', Devcontroller.devPost)


// Employer Posts
// app.get('/api/employerposts/:employertech_id', EmployeeController.getEmployerPosts)
app.post('/api/employerposts/:employertech_id', EmployeeController.employerPost)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})
