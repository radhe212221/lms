export function login(data, ob) {
    return data?.some(x => x.email === ob.email && x.password === ob.password)
}
export function getUserData(data, ob) {
    return login(data, ob) ? data?.find(x => x.email === ob.email && x.password === ob.password) : null
}
