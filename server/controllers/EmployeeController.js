module.exports = {
    getEmployerPosts: (req, res) => {
        const db = req.app.get('db')
        const employerPosts = await db.getEmployerPosts()
        res.status(200).json(employerPosts)
    },

    getEmployerPost: (req, res) => {
        const db = req.app.get('db')
        const {employertech_id} = req.params
        const employerPostById = await db.getEmployerPostById(employertech_id)
        res.status(200).json(employerPostById)
    },

    employerPost: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, joblength, bio} = req.body
        const {employertech_id} = req.params
        const db = req.app.get('db')
        const employerPost = await db.addEmployerPost(skill1, skill2, skill3, skill4, experience, joblength, bio, employertech_id)
        res.status(200).json(employerPost)
    },

    editEmployerPost: (req, res) => {


    },

    deleteEmployerPost: (req, res) => {

    }
}