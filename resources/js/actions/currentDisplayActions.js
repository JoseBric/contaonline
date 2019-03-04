// import { TYPE } from '../actions/types'

export function changeTab(){
    return function(dispatch) {
        dispatch({
            type: "CHANGE_TAB",
            payload: {}
        })
    }
} 
export function changeDate(){
    return function(dispatch) {
        dispatch({
            type: "CHANGE_DATE",
            payload: {}
        })
    }
} 