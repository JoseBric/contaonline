import swal from "sweetalert";

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

export function createAccount(data){
    return function(dispatch) {
        axios.post("/cuenta", data, {headers:{
            "X-CSRF-TOKEN": token, 
        }}).then((res)=>{
            swal("La cuenta se creó exitosamente", {icon: "success"})
            dispatch(getAccounts())
        }).catch(err=>console.log(err))
    }
}

export function updateAccountInfo(field, value, id){
    const data = {}
    if(field.match("nested-")) data[field.replace("nested-addresses-", "")] = value
    else data[field] = value
    data[field] = value
    return function(dispatch) {
        axios.put(`/cuentas/${id}`, data, {headers:{
            "X-CSRF-TOKEN": token, 
        }}).then((res)=>{
            dispatch(getAccounts())
        }).catch(err=>console.log(err))
    }
}
export function deleteAccount(id){
    return function(dispatch) {
        axios.delete(`/cuentas/${id}`, {headers:{
            "X-CSRF-TOKEN": token, 
        }}).then((res)=>{
            dispatch(getAccounts())
        }).catch(err=>console.log(err))
    }
}