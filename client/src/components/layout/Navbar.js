import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks />
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="brand-logo left">Life Lesson</Link>
                {links}   
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
