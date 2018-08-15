
const initialState = {
    loggedIn: false,
    userInfo: null,
    currentlySelectedJob: null,
    currentDetail: null,
    token: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLELOGIN":
            return { ...state, loggedIn: true }
        case "SETUSER":
            return { ...state, userInfo: action.payload }
        case "SETCURRENTJOB":
            return { ...state, currentlySelectedJob: action.payload.currentlySelectedJob }
        case "SETCURRENTDETAIL":
            return { ...state, currentDetail: action.payload}
        default:
            return state
    }
} 