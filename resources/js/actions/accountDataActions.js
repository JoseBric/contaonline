// import { TYPE } from '../actions/types'

export function getInvoices(income){
    return function(dispatch, getState) {
        const { account_id, current_date } = getState().currentDisplay
        axios.get(`/invoices/${account_id}/${current_date}/${income}`)
        .then(json=>{
            dispatch({
                type: "INVOICE",
                payload: json.data
            })
        })
    }
}

export function getAccStates(){
    return function(dispatch, getState) {
        const { account_id, current_date } = getState().currentDisplay
        axios.get(`/account_states/${account_id}/${current_date}`)
        .then(json=>{
            dispatch({
                type: "ACC_STATE",
                payload: json.data
            })
        })
    }
}

export function getDocuments(){
    return function(dispatch, getState) {
        const { account_id, current_date } = getState().currentDisplay
        axios.get(`/documents/${account_id}/${current_date}`)
        .then(json=>{
            dispatch({
                type: "DOCUMENT",
                payload: json.data
            })
        })
    }
}

export function getNotes(){
    return function(dispatch, getState) {
        const { account_id, current_date } = getState().currentDisplay
        axios.get(`/notes/${account_id}/${current_date}`)
        .then(json=>{
            dispatch({
                type: "NOTE",
                payload: json.data
            })
        })
    }
}

export function uploadXml(e){
    return function(dispatch, getState) {
        const files = e.target.files
        const account_id = getState().currentDisplay.account_id
        Array.from(files).forEach(file => {
            const formData = new FormData()
            formData.append("xml_input", file)
            formData.append("account_id", account_id)
            axios.post("/invoices", formData, {
                headers: {
                    "X-CSRF-TOKEN": token, 
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(re => {
                if(re.data.error) {
                    console.log(re.data.error)
                } else {
                    dispatch(getInvoices())
                }
            })
        })
        e.target.value = null
    }
}

export function uploadAccState(e){
    return function(dispatch, getState) {
        const files = e.target.files
        const account_id = getState().currentDisplay.account_id
        Array.from(files).forEach(file => {
            const formData = new FormData()
            formData.append("account_state_input", file)
            formData.append("account_id", account_id)
            axios.post("/account_states", formData, {
                headers: {
                    "X-CSRF-TOKEN": token, 
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(re => {
                if(re.data.error) {
                    console.log(re.data.error)
                } else {
                    dispatch(getAccStates())
                }
            })
        })
        e.target.value = null
    }
}

export function uploadDoc(e){
    return function(dispatch, getState) {
        const files = e.target.files
        const account_id = getState().currentDisplay.account_id
        Array.from(files).forEach(file => {
            const formData = new FormData()
            formData.append("document_input", file)
            formData.append("account_id", account_id)
            axios.post("/documents", formData, {
                headers: {
                    "X-CSRF-TOKEN": token, 
                    'Content-Type': 'multipart/form-data'
                }
            }).then(re => {
                dispatch(getDocuments())
            })
        })
        e.target.value = null
    }
}

export function uploadNote(content, title){
    return function(dispatch, getState) {
        const account_id = getState().currentDisplay.account_id
        console.log(content)
        if(content == "") return false
        axios.post("/notes", {title: title, content: content, account_id: account_id}, {
            headers: {
                "X-CSRF-TOKEN": token, 
            }
        })
        .then(()=>dispatch(getNotes()))
    }
}

export function getRawInvoice(id){
    return function(dispatch, getState) {
        axios.get("/invoices/raw/" + id, {
            headers: {
                "X-CSRF-TOKEN": token, 
            }
        }).
        then(res=>dispatch({
            type: "RAW_INVOICE",
            payload: res.data
        }))
    }
}

export function changeInvState(id){
    return function(dispatch, getState) {
        const data = {
            id: id,

        }
        const headers = {
            "X-CSRF-TOKEN": token, 
        }
        axios.post("/invoices/state", data, {headers: headers})
        .then(res=>{
            let index
            const invoice = getState().data.find((el, idx)=>{
                index = idx
                return el.id == id
            })
            invoice.estado = res.data
            const filteredArr = getState().data.filter((el)=>el.id != id)
            filteredArr.splice(index, 0, invoice)
            dispatch({
                type: "INVOICE",
                payload: filteredArr
            })
        })
    }
}

export function deleteInvoice(id){
    return function(dispatch, getState) {
        const headers = {
            "X-CSRF-TOKEN": token, 
        }
        axios.delete("/invoices/"+id, {headers: headers})
        .then(res=>{
            const filteredArr = getState().data.filter((el)=>el.id != id)
            dispatch({
                type: "INVOICE",
                payload: filteredArr
            })
        })
    }
}

export function deleteAccState(id){
    return function(dispatch, getState) {
        const headers = {
            "X-CSRF-TOKEN": token, 
        }
        console.log("/account_states/" + id)
        axios.delete("/account_states/" + id, {headers: headers})
        .then(res=>{
            const filteredArr = getState().data.filter((el)=>el.id != id)
            dispatch({
                type: "ACC_STATE",
                payload: filteredArr
            })
        })
    }
}

export function deleteDocument(id){
    return function(dispatch, getState) {
        const headers = {
            "X-CSRF-TOKEN": token, 
        }
        axios.delete("/documents/"+id, {headers: headers})
        .then(res=>{
            const filteredArr = getState().data.filter((el)=>el.id != id)
            dispatch({
                type: "DOCUMENT",
                payload: filteredArr
            })
        })
    }
}

export function deleteNote(id){
    return function(dispatch, getState) {
        const headers = {
            "X-CSRF-TOKEN": token, 
        }
        axios.delete("/notes/"+id, {headers: headers})
        .then(res=>{
            const filteredArr = getState().data.filter((el)=>el.id != id)
            dispatch({
                type: "NOTE",
                payload: filteredArr
            })
        })
    }
}

