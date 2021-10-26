import data from '../data';
import types from './types';

const initialState = {
    data
}

function addPost(state, payload) {
    return [
        ...state,
        payload
    ]
}

function deletePost(state, id) {
    return [
        state.filter( item => item.key !== id)
    ]
}

function editPost(state, payload, id) {
    return [
        state.map( item => {
            if (item.key === payload.key) return payload;
            else return item;
        }),
    ]
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
