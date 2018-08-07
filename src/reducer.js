
const initialState = {
    item: [1,2,3,4,5],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
} 