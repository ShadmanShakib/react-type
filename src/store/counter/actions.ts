import {INCREASE_COUNT, DECREASE_COUNT} from './actionTypes'

export function increaseCount(){
    return{
        type: INCREASE_COUNT,
    }
    
}
export function decreaseCount(){
    return{
        type:DECREASE_COUNT
    }
}