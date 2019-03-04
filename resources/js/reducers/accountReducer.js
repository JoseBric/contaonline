// import { TYPE } from '../actions/types'
const initialState = {
    accounts: []
}

export default function accountReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_ACCOUNTS":
        return {
            accounts: [...action.payload]
        }
        case "CREATE_ACCOUNT":
        return {
            accounts: [...state.accounts, action.payload]
        }
        default:
        return state
    }
}