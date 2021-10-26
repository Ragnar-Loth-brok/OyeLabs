import types from './types';


function addPost( payload ) {
    return {
        type: types.ADD_POST,
        payload
    }
}

function editPost() {
    return {
        type: types.EDIT_POST,
        payload
    }
}

function deletePost() {
    return {
        type: types.DELETE_POST,
        payload
    }
}

const actionCreaters = {
    addPost,
    editPost,
    deletePost
}

export default actionCreaters;