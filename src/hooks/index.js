import { useEffect, useState } from "react"

export const useDate = (dateParams = Date.now()) => {
    const [y, sety] = useState(0)
    const [m, setm] = useState(0)
    const [d, setd] = useState(0)

    const boot = () => {
        let [_y, _m, _d] = new Date(dateParams).toJSON().slice(0, 10).split("-").map(x => +x)
        sety(_y)
        setm(_m)
        setd(_d)
    }
    useEffect(boot, [])
    return {
        y, m, d
    }
}