export default function formDataReducer(state = {name: '', email: '', phone: ''}, action) {
    switch(action.type) {
        case 'UPDATE': 
            return state = action.data;
        default:
            return state;
    } 
}