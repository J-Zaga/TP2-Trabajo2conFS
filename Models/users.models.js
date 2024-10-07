import fs from "fs"

async function getUsers(){
    try{
        const file = await fs.promises.readFile("users.txt","utf-8")
        const users = JSON.parse(file)
        return users
    }catch(error){
        console.error("Error al obtener la información", error)
        return "Error"
    }
}

async function postUsers(user){
    try{
        const file = await fs.promises.readFile("users.txt", "utf-8")
        const users = JSON.parse(file)
        user.id = users[users.length - 1].id + 1;
        users.push(user)
        const updateData = JSON.stringify(users, null, 2)
        await fs.promises.writeFile("users.txt", updateData, "utf-8")
        return user
    }catch(error){
        console.error("Error al agregar al usuario", error)
        return "Error"
    }
}

async function patchUsers(id, data){
    try{
        const file = await fs.promises.readFile("users.txt", "utf-8")
        const users = JSON.parse(file)
        const indice = users.findIndex((e) => e.id == id)
        const modifiedUser = {...users[indice], ...data}
        users.splice(indice, 1, modifiedUser)
        const updateData = JSON.stringify(users, null, 2)
        await fs.promises.writeFile("users.txt", updateData, "utf-8")
        return "Exito"
    }catch(error){
        console.error("Error al modificar", error)
        return "Error"
    }
}

export default{
    getUsers,
    postUsers,
    patchUsers
}