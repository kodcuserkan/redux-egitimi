import Reducer1 from './reducer1';
import Reducer2 from './reducer2';
import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    Reducer1 : Reducer1,
    Reducer2 : Reducer2
})

export default rootReducer;