
const initialState = {
    logged_in: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLELOGIN':
            return { ...state, logged_in: !state.logged_in }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
} 