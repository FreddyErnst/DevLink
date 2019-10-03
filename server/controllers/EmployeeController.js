module.exports = {
    getEmployerPosts: async (req, res) => {
        const db = req.app.get('db')
        // const {employer_id} = req.session.employer
        const employerPosts = await db.getEmployerPosts()
        res.status(200).json(employerPosts)
    },

    getEmployerPostBySkill: async (req, res) => {
        const db = req.app.get('db')
        const {skill1} = req.params
        const employerPostBySkill = await db.getEmployerPostBySkill(skill1)
        res.status(200).json(employerPostBySkill)
    },

    employerPost: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, length, bio, state} = req.body
        const {employer_id} = req.session.employer
        const db = req.app.get('db')
        const employerPost = await db.addEmployerPost(skill1, skill2, skill3, skill4, experience, length, bio, state, employer_id)
        res.status(200).json(employerPost)
    },

    editEmployerUsername: async (req, res) => {
        const {username} = req.body
        const {employer_id} = req.session.employer
        const db = req.app.get('db')
        const newEmployerUsername = await db.editEmployerUsername(username, employer_id)
        res.status(200).json(newEmployerUsername)

    },

    editEmployerEmail: async (req, res) => {
        const {email} = req.body
        const {employer_id} = req.session.employer
        const db = req.app.get('db')
        const newEmployerEmail = await db.editEmployerEmail(email, employer_id)
        res.status(200).json(newEmployerEmail)
    },

    updateEmployerForm: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, length, bio, state} = req.body
        const {employer_id} = req.session.employer
        const db = req.app.get('db')
        const newEmployerPost = await db.updateEmployerForm(skill1, skill2, skill3, skill4, experience, length, bio, state, employer_id)
        res.status(200).json(newEmployerPost)
    },

    deleteEmployer: async (req, res) => {
        const {employer_id} = req.session.developer
        const db = req.app.get('db')
        await db.deleteEmployer(employer_id)
        res.sendStatus(200)
    },

    deleteEmployerPost: (req, res) => {

    },

    uniqueEmployerInfo: async (req, res) => {
        const {employer_id} = req.session.employer
        const db = req.app.get('db')
        const employerInfo = await db.getUniqueEmployerInfo(employer_id)
        res.status(200).json(employerInfo)

    },

    addEmployerPicture: async (req, res) => {
        const db = req.app.get('db')
        const {profilepic} = req.body
        const {employer_id} = req.session.employer
        console.log(employer_id)
        console.log(profilepic)
        const addPicture = await db.addEmployerProfilePicture(profilepic, employer_id)
        // console.log(addPicture)
        res.status(200).json(addPicture)
    },

}