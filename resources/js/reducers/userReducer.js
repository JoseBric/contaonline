// import { TYPE } from '../actions/types'
const initialState = []
export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_USERS":
        return [...action.payload]
        case "CREATE_USER":
        return [...state, action.payload]
        default:
        return state
    }
}