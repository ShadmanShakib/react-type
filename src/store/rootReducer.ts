import {combineReducers} from 'redux'
import counterReducer from './counter/reducer';
import { layoutReducer } from './layout/reducer';

const rootReducer=combineReducers({
    counter:counterReducer,
    layout:layoutReducer,

})
export default rootReducer;