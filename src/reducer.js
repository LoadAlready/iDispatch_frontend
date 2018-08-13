
const initialState = {
    loggedIn: false,
    username: null,
    token: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLELOGIN":
            return { ...state, loggedIn: true }
        default:
            return state
    }
} 