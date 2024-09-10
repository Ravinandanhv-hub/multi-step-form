// use context API
// import { createContext } from "react";

// export const stepCountContext = createContext(null);
// export const stepCountDispatchContext = createContext(null);

function stepCountReducer(state = {stepCount: 0}, action) {
    switch(action.type) {
        case 'next':
            return { stepCount: state.stepCount + 1 }
        case 'previous':
            return { stepCount: state.stepCount - 1 }
        case 'byValue':
            return { stepCount: action.data }
        default:
            return state; // Ensure state is returned if no actions match
    } 
}

export default stepCountReducer;