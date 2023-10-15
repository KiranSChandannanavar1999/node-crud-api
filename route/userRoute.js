const UserRoute = require('express').Router()
const { getAllUser, getSingleUser, createUser, updateUser, deleteUser } = require('../controller/userController')

UserRoute.get('/', getAllUser)
UserRoute.get('/single/:id', getSingleUser)

UserRoute.post('/add', createUser)

UserRoute.patch('/update/:id', updateUser)

UserRoute.delete('/delete/:id', deleteUser)

module.exports = UserRoute