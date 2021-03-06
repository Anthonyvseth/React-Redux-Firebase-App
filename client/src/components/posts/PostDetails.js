import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const PostDetails = (props) => {
    const {post, auth} = props
        if (!auth.uid) return <Redirect to='/signin' />
    if (post) {
        return (
            <div className='container section projcect-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{ post.title }</span>
                        <p>{ post.content }</p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <div>Posted by Anthony Seth</div>
                        <div>11nd January, 11:11am</div>
                    </div>'
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center"> Post Loading... </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id
    const posts = state.firestore.data.posts
    const post = posts ? posts[id] : null
    return {
        post: post,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts'}
    ])
)(PostDetails)
