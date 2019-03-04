// import { TYPE } from '../actions/types'
const initialState = {
    users: {}
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_USERS":
        return {
            ...state,
            users: [...action.payload]
        }
        case "CREATE_USER":
        return {
            ...state,
            users: [...state.users, action.payload]
        }
        default:
        return state
    }
}