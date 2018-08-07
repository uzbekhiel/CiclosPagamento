const INTIAL_STATE = {list: {}}

export default (state=INTIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return {...state, list: action.payload.data}
            break;
        default:
            return state
            break;
    }
}