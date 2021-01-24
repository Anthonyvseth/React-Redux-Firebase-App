const initState = {
    posts: [
        {id:1, title: 'Awesome', content: 'blah blah blah'},
        {id:2, title: 'Great', content: 'blah blah blah'},
        {id:3, title: 'Fantastic', content: 'blah blah blah'},
        {id:4, title: 'Amazing', content: 'blah blah blah'},
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post)
            break;
        default:
            console.log("error creating post")
    }
    return state
}

export default postReducer