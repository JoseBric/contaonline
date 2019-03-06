// import { TYPE } from '../actions/types'
const initialState = {
    accCreate: {
        show: false,
    },
    dataTable: {
        rawFile: ""
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
        case "RAW_INVOICE":
        return {
            ...state,
            dataTable: {
                rawFile: action.payload,
            }
        }
        default:
        return state
    }
}