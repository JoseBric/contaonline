// import { TYPE } from '../actions/types'
const initialState = {
    current_date: "",
    current_tab: "",
}

export default function currentDisplayReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_TAB":
        return {
            ...state,
            current_date: action.payload
        }
        case "CHANGE_DATE":
        return {
            ...state,
            current_date: action.payload
        }
        default:
        return state
    }
}