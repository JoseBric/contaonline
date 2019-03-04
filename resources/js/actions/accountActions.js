// import { TYPE } from '../actions/types'

export function getAccounts(){
    return function(dispatch) {
        axios.get("/cuenta/all")
        .then(json => dispatch({
            type: "GET_ACCOUNTS",
            payload: json.data
        }))
    }
}

export function createAccount(){
    return function(dispatch) {
        dispatch({
            type: "CREATE_ACCOUNT",
            payload: {}
        })
    }
}