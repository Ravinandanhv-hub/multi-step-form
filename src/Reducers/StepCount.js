import { createContext } from "react";

export const stepCountContext = createContext(null);
export const stepCountDispatchContext = createContext(null);

function stepCountReducer(stepCount, action){
    switch(action.type) {
        case 'next': {
            return stepCount + 1
        } 
        case 'previous': {
            return stepCount - 1
        }
    } 
}

export default stepCountReducer;