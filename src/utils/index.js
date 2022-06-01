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

export function checkExistingbatch(a, ob) {
    let test = a.some(x => x.fid === ob.fid && x.slot_id === ob.slot_id && x.sid === ob.sid && x.cid === ob.cid && x.createdAt === ob.createdAt)
    return test
}
export function ymd(dateParams) {
    return new Date(dateParams?.createdAt).toJSON().slice(0, 10).split("-").map(x => +x)
}
export function hasBatch(day, a) {
    return a.some(x => ymd(x)[2] === day)
}
export function getBatch(day, a) {
    return hasBatch(day, a) ? (a.filter(x => ymd(x)[2] === day)) : []
}

export function onlythismonthbatches(a, y, m) {
    return a.filter(x => ymd(x)[0] === y && ymd(x)[1] === m)
}
