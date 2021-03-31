import {INCREASE_COUNT, DECREASE_COUNT} from './actionTypes'

const init={
    count:0
}
const counterReducer=(state:any=init, action:any)=>{
    switch(action.type){
        case INCREASE_COUNT:return{
            ...state,
            count:state.count+1
        }
        case DECREASE_COUNT: return{
            ...state,
            count:state.count-1
        } 
        default:return state
    }
}
export default counterReducer;