import { TYPE } from '../actions/types'

export function actionA(){
    return function(dispatch) {
        dispatch({
            type: TYPE,
            payload: {}
        })
    }
}