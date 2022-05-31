import data from './data'
const intialState = {
    menu:data.menu,
    admin: data.admin,
    faculty: data.faculty,
    student: data.student,
    courses: data.courses,
    slots: data.slots,
    batch: data.batch,
    user: null,
    loggedin: false,
    role: "",
}

function reducer(state = intialState, action) {
    switch (action.type) {
        default: return state
    }
}
export default reducer