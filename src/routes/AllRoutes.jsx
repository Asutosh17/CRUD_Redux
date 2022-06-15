import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddUser } from '../components/AddUser'
import { EditUser } from '../components/EditUser'
import Home from '../components/Home'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/create-user" element={<AddUser/>}></Route>
            <Route path="/edit-user/:id" element={<EditUser/>}></Route>
        </Routes>
    </div>
  )
}
