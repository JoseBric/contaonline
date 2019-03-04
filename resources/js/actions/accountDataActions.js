// import { TYPE } from '../actions/types'

export function getInvoices(){
    return function(dispatch) {
        dispatch({
            type: "INVOICE",
            payload: {}
        })
    }
}

export function geAccStates(){
    return function(dispatch) {
        dispatch({
            type: "ACC_STATE",
            payload: {}
        })
    }
}

export function getInvoices(){
    return function(dispatch) {
        dispatch({
            type: "DOCUMENT",
            payload: {}
        })
    }
}

export function getInvoices(){
    return function(dispatch) {
        dispatch({
            type: "NOTE",
            payload: {}
        })
    }
}