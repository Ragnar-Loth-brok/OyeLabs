import data from '../data';
import types from './types';

const initialState = {
    data
}

function addPost(state, payload) {
    return ({
        data: [ ...state.data, payload ]
    })
}

function deletePost(state, payload) {
    return ({
        data: state.data.filter( item => item.key !== payload)
    })
}

function editPost(state, payload, id) {
    return ({
        data: state.data.map( item => {
            if (item.key === payload.key) return payload;
            else return item;
        })
    })
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_POST:
            return addPost(state, action.payload);
        case types.EDIT_POST:
            return editPost(state, action.payload);
        case types.DELETE_POST:
            return deletePost(state, action.payload);
        default:
            return state
    }
}

export default reducer;