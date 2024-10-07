import usersServices from "../Services/users.services.js"

async function getUsers(req, res){
    const users = await usersServices.getUsers()
    res.status(200).send(users)
}

async function postUsers(req, res){
    const postData = req.body
    const resultadoPost = await usersServices.postUsers(postData)
    res.send(resultadoPost)
}

async function patchUsers(req, res){
    const { id } = req.params
    const patchData = req.body
    const resultadoPatch = await usersServices.patchUsers(id, patchData)
    res.send(resultadoPatch)
}

export default{
    getUsers,
    postUsers,
    patchUsers
}