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
    console.log("DFDHfhadfhjlkashjdf")
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
                    getInvoices(getState().currentDisplay.current_tab == "income") ///////////////////////
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
                    getAccStates() ////////////////////////////////
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
                if(re.data.error) {
                    console.log(re.data.error)
                } else {
                    getDocuments() ////////////////
                }
            })
        })
        e.target.value = null
    }
}

export function uploadNote(e){
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
                    getDocuments() //////////////////////
                }
            })
        })
        e.target.value = null
    }
}

