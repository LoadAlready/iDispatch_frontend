
const initialState = {
    loggedIn: false,
    userInfo: null,
    token: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLELOGIN":
            return { ...state, loggedIn: true }
        case "SETUSER":
            return { ...state, userInfo: action.payload }
        default:
            return state
    }
} 