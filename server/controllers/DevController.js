module.exports = {
    getDevPosts: async (req, res) => {
        const db = req.app.get('db')
        // const {developer_id} = req.session.developer
        const devPosts = await db.getDevPosts()
        res.status(200).json(devPosts)
    },

    getDevPostBySkill: async (req, res) => {
        const db = req.app.get('db')
        const {skill1} = req.params
        
        const uniqueDevSkill = await db.getDevPostBySkill(skill1)
    
        res.status(200).json(uniqueDevSkill)
     
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

    getDevs: async (req, res) => {
    const db = req.app.get('db')
    const getAllDevs = await db.getDevs()
    res.status(200).json(getAllDevs)
    },

    addDevPicture: async (req, res) => {
        const db = req.app.get('db')
        const {profilepic} = req.body
        const {developer_id} = req.session.developer
        const addPicture = await db.addDevProfilePicture(profilepic, developer_id)
        res.status(200).json(addPicture)
    },

    uniqueDevInformation: async (req , res) => {
        const db = req.app.get('db')
        const {developer_id} = req.session.developer
        const devInfo = await db.getUniqueDevInfo(developer_id)
        res.status(200).json(devInfo)
    },

    searchByState: async (req, res) => {
        const {skill1, state} = req.body
        const db = req.app.get('db')
        const stateSearch = await db.searchByState(skill1, state)
        res.status(200).json(stateSearch)
    },

    addDevGitHub: async (req, res) => {
        const {github} = req.body
        const {developer_id} = req.session.developer
        const db = req.app.get('db')
        const addGitHub = await db.addGithubDev(github, developer_id)
        res.status(200).json(addGitHub)
    } 
}