import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import userReducer from './userReducer'
import accountDataReducer from './accountDataReducer'
import currentDisplayReducer from './currentDisplayReducer'

export default combineReducers({
    accounts: accountReducer,
    users: userReducer,
    data: accountDataReducer,
    currentDisplay: currentDisplayReducer,
})