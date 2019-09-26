module.exports = {
    getEmployerPosts: async (req, res) => {
        const db = req.app.get('db')
        const employerPosts = await db.getEmployerPosts()
        res.status(200).json(employerPosts)
    },

    getEmployerPost: async (req, res) => {
        const db = req.app.get('db')
        const {employertech_id} = req.params
        const employerPostById = await db.getEmployerPostById(employertech_id)
        res.status(200).json(employerPostById)
    },

    employerPost: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, length, bio, state} = req.body
    
        const db = req.app.get('db')
        const employerPost = await db.addEmployerPost(skill1, skill2, skill3, skill4, experience, length, bio, state)
        res.status(200).json(employerPost)
    },

    editEmployerPost: (req, res) => {


    },

    deleteEmployerPost: (req, res) => {

    }
}