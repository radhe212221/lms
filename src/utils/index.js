export function login(data, ob) {
    return data?.some(x => x.email === ob.email && x.password === ob.password)
}
export function getUserData(data, ob) {
    return login(data, ob) ? data?.find(x => x.email === ob.email && x.password === ob.password) : null
}


export function chart1(state) {
    const courses = state?.courses?.map(x => x.name)
    const count = courses?.map(x => state?.student?.filter(y => y?.course === x).length || 0)
    return {
        labels: courses,
        count
    }
}
export function chart2(state) {
    const courses = state?.courses?.map(x => x.name)
    const count = state?.courses?.map(x => x.days)
    return {
        labels: courses,
        count
    }
}

export function getThisMonthCalendar() {
    let date = new Date()
    let n = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let a = Array.from(Array(30)).map((x, i) => i + 1)
    return a
}