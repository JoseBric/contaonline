// import { TYPE } from '../actions/types'
const initialState = []

export default function accountReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_ACCOUNTS":
        return [...action.payload]
        case "CREATE_ACCOUNT":
        return [...state.accounts, action.payload]
        default:
        return state
    }
}