import usersControllers from "../Controllers/users.controllers.js"
import express from "express"

const router = express.Router()
router.get("/users", usersControllers.getUsers)
router.post("/users", usersControllers.postUsers)
router.patch("/users/update/:id", usersControllers.patchUsers)
export default router