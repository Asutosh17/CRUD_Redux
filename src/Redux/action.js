import axios from 'axios'

// Action types
export const GET_USERS = "GET_USERS"
export const DELETE_USER = "DELETE_USER"
export const ADD_USER = "ADD_USER"
export const GET_SINGLE_USER = "GET_SINGLE_USER"
export const UPDATE_USER = "UPDATE_USER"

const getUsers = (payload) => ({
        type:GET_USERS,
        payload
}) 

const delUser = () => ({
    type:DELETE_USER
})

const addUser = () => ({
    type:ADD_USER
})

const getSingleUser = (payload) => ({
    type:GET_SINGLE_USER,
    payload
})

const updateUser = () => ({
    type:UPDATE_USER
})


// Get data 
export const loadUsers = () => (dispatch) => {
    axios.get("http://localhost:8080/users").then((res) => {
        console.log(res.data)
        dispatch(getUsers(res.data))
    }).catch((err) => console.log(err))
}
// delete data
export const deleteUsers = (id) => (dispatch) => {
    axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
        console.log(res.data)
        dispatch(delUser())
        dispatch(loadUsers())
    }).catch((err) => console.log(err))
}
// post data
export const UserAdded = (payload) => (dispatch) => {
    axios.post(`http://localhost:8080/users`,payload).then((res) => {
        console.log(res.data)
        dispatch(addUser())
        // dispatch(loadUsers())
    }).catch((err) => console.log(err))
}
// single user data
export const SingleUsers = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/users/${id}`).then((res) => {
        console.log(res.data)
        dispatch(getSingleUser(res.data))
    }).catch((err) => console.log(err))
}

// update User
export const UpdateUsers = (user,id) => (dispatch) => {
    axios.put(`http://localhost:8080/users/${id}`,user).then((res) => {
        console.log(res.data)
        dispatch(updateUser())
    }).catch((err) => console.log(err))
}