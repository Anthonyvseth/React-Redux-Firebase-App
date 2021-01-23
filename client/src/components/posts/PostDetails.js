import React from 'react'

const PostDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className='container section projcect-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Post Title - {id}</span>
                    <p>loremQuia quia veritatis accusamus. Omnis neque veniam mollitia enim cupiditate. Perferendis sequi commodi iste corrupti accusantium fugiat molestias occaecati vel. Culpa ad nihil ea numquam sit commodi.</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Anthony Seth</div>
                    <div>11nd January, 11:11am</div>
                </div>'
            </div>
        </div>
    )
}

export default PostDetails
