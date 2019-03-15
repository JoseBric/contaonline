import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import userReducer from './userReducer'
import accountDataReducer from './accountDataReducer'
import currentDisplayReducer from './currentDisplayReducer'
import modalReducer from "./modalReducer"

export default combineReducers({
    accounts: accountReducer,
    users: userReducer,
    data: accountDataReducer,
    currentDisplay: currentDisplayReducer,
    modal: modalReducer,
})