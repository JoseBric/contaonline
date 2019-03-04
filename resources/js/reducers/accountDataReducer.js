// import { TYPE } from '../actions/types'
const initialState = {
    data: {},
}

export default function accountDataReducer(state = initialState, action) {
    switch(action.type) {
        case "INVOICE":
        return {
            ...state,
            data: action.payload
        }
        case "ACC_STATE":
        return {
            ...state,
            data: action.payload
        }
        case "DOCUMENT":
        return {
            ...state,
            data: action.payload
        }
        case "NOTE":
        return {
            ...state,
            data: action.payload
        }
        default:
        return state
    }
}