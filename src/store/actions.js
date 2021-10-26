import types from './types';


function addPost( payload ) {
    return {
        type: types.ADD_POST,
        payload
    }
}

function editPost( payload ) {
    return {
        type: types.EDIT_POST,
        payload
    }
}

function deletePost(id) {
    return {
        type: types.DELETE_POST,
        payload: id
    }
}

const actionCreaters = {
    addPost,
    editPost,
    deletePost
}

export default actionCreaters;