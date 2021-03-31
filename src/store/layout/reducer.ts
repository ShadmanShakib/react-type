import { AnyAction } from "redux";
import { SIDEBAR_TOGGLE } from "./actionTypes";

const initialState={
    sidebar:false
}

export function layoutReducer(state=initialState,action:AnyAction){
    switch(action.type){
        case SIDEBAR_TOGGLE: return {...state,sidebar:!state.sidebar}
        default:return state;
    }
}