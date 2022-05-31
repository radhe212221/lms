import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Toast() {
    const dispatch = useDispatch()
    const state = useSelector(s => s)
    const { msg } = state

    const hideToast = e => {
        console.log("window",e.code)
        if (e.code === "Escape") {
            dispatch({ type: "t.h" })
        }
    }

    const boot = () => {
        window.addEventListener("keyup", hideToast)
        return window.removeEventListener("keyup", hideToast)
    }

    useEffect(boot, [])
    return (
        <div className={msg ? "toast active" : "toast"}>server says : {msg}</div>
    )
}
