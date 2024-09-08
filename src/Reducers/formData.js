export default function formDataReducer(state = {info: {name: '', email: '', phone: ''}, plan: {type: '', tenure: 'monthly', price: 0}, addons : { onlineService: false, largerStorage: false, customizableProfile: false }}, action) {
    switch(action.type) {
        case 'UPDATEINFO':
            return { ...state, info: { ...action.data }};
        case 'UPDATEPLAN':
            return {...state, plan: { ...action.data }};
        case 'UPDATEADDON':
            return {...state, addons: { ...action.data }};
        default:
            return state;
    } 
}