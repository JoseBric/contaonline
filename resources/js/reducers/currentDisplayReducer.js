// import { TYPE } from '../actions/types'
const initialState = {
    current_date: "",
    current_tab: "",
    account_id: "",
}

export default function currentDisplayReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_TAB":
        return {
            ...state,
            current_tab: action.payload
        }
        case "CHANGE_DATE":
        return {
            ...state,
            current_date: action.payload
        }
        case "CHANGE_ACC_ID":
        return {
            ...state,
            account_id: action.payload
        }
        default:
        return state
    }
}