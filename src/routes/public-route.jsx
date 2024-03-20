import React from 'react'


import { Navigate, Outlet } from 'react-router-dom'


const useAuth = () => {
    const user = sessionStorage.getItem('token')
    if (user) {
        return true
    } else {
        return false
    }
}


const PublicRoutes = (props) => {


    const auth = useAuth()


    return auth ? <Navigate to="/" /> : <Outlet />
    // return <Navigate to="/" />

}


export default PublicRoutes;;