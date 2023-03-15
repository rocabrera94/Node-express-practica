import {v4 as uuidv4} from 'uuid'

let users = []

export const createUser = ((req, res) => {
  const user = req.body

  const userId = uuidv4

  const userWithId = {...user, userId}

  users.push(userWithId)

  res.send('user has been created')
})

export const getUsers = ((req, res) => {
  res.send(users)
})

export const getUser = ((req, res) => {
  const {id} = req.params

  const userFound = users.find((user)=> user.id === id)

  res.send(userFound)
})

export const deleteUser = ((req, res) => {
  const {id} = req.params

  const users = users.filter((user) => user.id !== id)

  res.send('user has been deleted')
})

export const updateUser = ((req, res) => {
  const {id} =req.params
  const {firstName, lastName, age} = req.body;
  const user = users.find((user) => user.id === id)

  if (firstName) user.firstName = firstName
  if (age) user.age = age
  if (lastName) user.lastName = lastName

  res.send('user has been updated')
})