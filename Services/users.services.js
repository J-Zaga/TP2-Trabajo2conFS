import usersModels from "../Models/users.models.js"

async function getUsers(){
    return usersModels.getUsers()
}

async function postUsers(user) {
    return usersModels.postUsers(user)
}

async function patchUsers(id, data){
    return usersModels.patchUsers(id, data)
}

export default{
    getUsers,
    postUsers,
    patchUsers
}