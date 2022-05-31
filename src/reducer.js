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
    loggedin: false,
    role: "",
    msg: "",
}

function reducer(state = intialState, action) {
    switch (action.type) {
        case "login": return { ...state, ...action.payload, msg: "loggedin success as :" + action.payload.role }
        case "t.h": return { ...state, msg: "" }
        default: return state
    }
}
export default reducer