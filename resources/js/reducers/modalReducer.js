// import { TYPE } from '../actions/types'
const initialState = {
    accCreate: {
        show: false,
    }
}

export default function currentDisplayReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_ACC_CREATE_MODAL":
        return {
            ...state,
            accCreate: {
                show: action.payload,
            }
        }
        default:
        return state
    }
}