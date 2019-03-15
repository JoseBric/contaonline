// import { TYPE } from '../actions/types'
const initialState = [

]

export default function accountDataReducer(state = initialState, action) {
    switch(action.type) {
        case "INVOICE":
        return [...action.payload]
        case "ACC_STATE":
        return [...action.payload]
        case "DOCUMENT":
        return [...action.payload]
        case "NOTE":
        return [...action.payload]
        default:
        return state
    }
}