const bcrypt = require('bcryptjs')

module.exports = {
    getDev: (req, res ) => {
        if(req.session.developer) {
            res.status(200).json(req.session.developer)
        }
    },

    registerDev: async (req, res) => {
        console.log("hit")
        const {username, password, firstname, lastname, email} = req.body
        const db = req.app.get('db')

        const devExists = await db.checkForDev(username)

        if (devExists[0]) {
            res.status(409).json("Username taken")
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newDev = await db.registerDev(username, hash, firstname, lastname, email)

            req.session.developer = {
                developerid: newDev[0].developer_id,
                username: newDev[0].username,
                firstname: newDev[0].firstname,
                lastname: newDev[0].lastname,
                email: newDev[0].email
            
            }
            res.status(200).json(req.session.developer)
        }
    },

    loginDev: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const devExists = await db.checkForDev(username)

        if (!devExists[0]) {
            res.status(403).json("Username or Password incorrect")
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const isAuthenticated = bcrypt.compareSync(password, hash)

            if(!isAuthenticated) {
                res.status(403).json("Username or Password incorrect")
            } else {
                req.session.developer = {
                    developerid: devExists[0].developer_id,
                    username: devExists[0].username,
                    firstname: devExists[0].firstname,
                    lastname: devExists[0].lastname,
                    email: devExists[0].email
                }
            }
            res.status(200).json(req.session.developer)
        }


    },

    logoutDev: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    },

    //Employer login
    getEmployer: (req, res ) => {
        if(req.session.employer) {
            res.status(200).json(req.session.employer)
        }
    },

    registerEmployer: async (req, res) => {
        const {username, password, firstname, lastname, email} = req.body
        const db = req.app.get('db')

        const employerExists = await db.checkForEmployer(username)

        if (employerExists[0]) {
            res.status(409).json("Username taken")
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newEmployer = await db.registerEmployer(username, hash, firstname, lastname, email)

            req.session.developer = {
                employer_id: newEmployer[0].employer_id,
                username: newEmployer[0].username,
                firstname: newEmployer[0].firstname,
                lastname: newEmployer[0].lastname,
                email: newEmployer[0].email
            
            }
            res.status(200).json(req.session.employer)
        }
    },

    loginEmployer: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const employerExists = await db.checkForEmployer(username)

        if (!employerExists[0]) {
            res.status(403).json("Username or Password incorrect")
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const isAuthenticated = bcrypt.compareSync(password, hash)

            if(!isAuthenticated) {
                res.status(403).json("Username or Password incorrect")
            } else {
                req.session.employer = {
                    employer_id: employerExists[0].employer_id,
                    username: employerExists[0].username,
                    firstname: employerExists[0].firstname,
                    lastname: employerExists[0].lastname,
                    email: employerExists[0].email
                }
            }
            res.status(200).json(req.session.employer)
        }


    },

    logoutEmployer: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    }
}