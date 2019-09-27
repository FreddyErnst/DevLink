module.exports = {
    getDevPosts: async (req, res) => {
        const db = req.app.get('db')
        const devPosts = await db.getDevPosts()
        res.status(200).json(devPosts)
    },

    getDevPost: async (req, res) => {
        const db = req.app.get('db')
        const filteredDevPost = await db.getDevPost(skill1, skill2, skill3, skill4, experience, length, bio ,state)

        res.status(200).json(filteredDevPost)
    },

    devPost: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, length, bio, state} = req.body
        const {developer_id} = req.session.developer
        const db = req.app.get('db')
        const devPost = await db.addDevPost(skill1, skill2, skill3, skill4, experience, length, bio, state, developer_id)
        res.status(200).json(devPost)
    },

    editDevUsername: async (req, res) => {
        const {username} = req.body
        const {developer_id} = req.session.developer
        const db = req.app.get('db')
        const newDevUsername = await db.editDevUsername(username, developer_id)
        res.status(200).json(newDevUsername)

    },

    editDevEmail: async (req, res) => {
        const {email} = req.body
        const {developer_id} = req.session.developer
        const db = req.app.get('db')
        const newDevEmail = await db.editDevEmail(email, developer_id)
        res.status(200).json(newDevEmail)
    },

    updateDevForm: async (req, res) => {
        const {skill1, skill2, skill3, skill4, experience, length, bio, state} = req.body
        const {developer_id} = req.session.developer
        const db = req.app.get('db')
        const newDevPost = await db.updateDevForm(skill1, skill2, skill3, skill4, experience, length, bio, state, developer_id)
        res.status(200).json(newDevPost)
    },

    deleteDeveloper: async (req, res) => {
        const {developer_id} = req.session.developer
        const db = req.app.get('db')
        await db.deleteDeveloper(developer_id)
        res.sendStatus(200)
    },

    deleteDevPost: (req, res) => {

    }
}