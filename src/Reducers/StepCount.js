import { createContext } from "react";

export const stepCountContext = createContext(null);
export const stepCountDispatchContext = createContext(null);

function stepCountReducer(state, action) {
    switch(action.type) {
        case 'next': 
            return {stepCount: state.stepCount + 1}
        case 'previous': 
            return {stepCount: state.stepCount - 1}
        default:
            return state; // Ensure state is returned if no actions match
    } 
}

export default stepCountReducer;