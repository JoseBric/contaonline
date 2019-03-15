// import { TYPE } from '../actions/types'

export function getUsers(){
    return function(dispatch) {
        axios.get("/usuarios/all")
        .then(json=>dispatch({
            type: "GET_USERS",
            payload: json.data
        }))

    }
}

export function createUser(){
    return function(dispatch) {
        dispatch({
            type: "CREATE_USER",
            payload: {}
        })
    }
}
