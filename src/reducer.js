import data from './data'
const intialState = {
    menu: data.menu,
    admin: data.admin,
    faculty: data.faculty,
    student: data.student,
    courses: data.courses,
    slots: data.slots,
    batch: data.batch,
    user: null,
    loggedin: true,
    role: "admin",
    msg: "",
}

function reducer(state = intialState, action) {
    switch (action.type) {
        case "login": return { ...state, ...action.payload, msg: "loggedin success as :" + action.payload.role }
        case "t.h": return { ...state, msg: "" }
        case "admin": return { ...state, admin: action.payload }
        case "faculty": return { ...state, faculty: action.payload }
        default: return state
    }
}
export default reducer