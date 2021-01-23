import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'>New Post</NavLink>
            </li>
            <li>
                <NavLink to='/'>Log Out</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating purple darken-1'>AVS</NavLink>
            </li>
        </ul>
    )
}

export default SignInLinks
