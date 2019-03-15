// import { TYPE } from '../actions/types'

export function changeTab(tab){
    return function(dispatch) {
        return new Promise(resolve=>{
            dispatch({
                type: "CHANGE_TAB",
                payload: tab
            })
            resolve()
        })
    }
} 
export function changeDate(date){
    return function(dispatch) {
        return new Promise(resolve=>{
            dispatch({
                type: "CHANGE_DATE",
                payload: date
            })
            resolve()
        })
    }
} 
export function changeAccId(accId){
    return function(dispatch) {
        return new Promise(resolve=>{
            dispatch({
                type: "CHANGE_ACC_ID",
                payload: accId
            })
            resolve()
        })
    }
} 