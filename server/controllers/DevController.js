module.exports = {
    getDevPosts: async (req, res) => {
        const db = req.app.get('db')
        const devPosts = await db.getDevPosts()
        res.status(200).json(devPosts)
    },

    getDevPost: async (req, res) => {
        const db = req.app.get('db')
        const {tech_id} = req.params
        const devPostById = await db.getDevPostById(tech_id)
        res.status(200).json(devPostById)
    },

    devPost: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, joblength, bio} = req.body
        const {tech_id} = req.params
        const db = req.app.get('db')
        const devPost = await db.addDevPost(skill1, skill2, skill3, skill4, experience, joblength, bio, tech_id)
        res.status(200).json(devPost)
    },

    editDevPost: (req, res) => {
        

    },

    deleteDevPost: (req, res) => {

    }
}