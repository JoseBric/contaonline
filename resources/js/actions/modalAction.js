// import { TYPE } from '../actions/types'

export function changeAccCreate(bool){
    return function(dispatch) {
        dispatch({
            type: "CHANGE_ACC_CREATE_MODAL",
            payload: {bool}
        })
    }
} 

export function changeEditorContent(content){
    return function(dispatch) {
        dispatch({
            type: "EDITOR_CONTENT",
            payload: content
        })
    }
} 