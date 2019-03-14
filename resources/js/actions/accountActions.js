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