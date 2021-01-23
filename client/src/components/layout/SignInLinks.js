import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/create'>New Post</NavLink>
            </li>
            <li>
                <NavLink to='/'>Log Out</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating amber accent-4'>AVS</NavLink>
            </li>
        </ul>
    )
}

export default SignInLinks
