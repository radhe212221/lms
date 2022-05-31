import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Login() {
  const state = useSelector(s => s)
  const [ob, setob] = useState({
    email: "",
    password: "",
    role: ""
  })

  const handleChange = e => {
    let { name, value } = e.target
    setob({ ...ob, [name]: value })
  }
  const handlesubmit = () => {
    let data = state[ob.role]
    console.log(data)
  }
  return (
    <div className='login'>
      <h1>login</h1>
      <input onChange={handleChange} name='email' value={ob.email} placeholder='username' />
      <input onChange={handleChange} name='password' value={ob.password} placeholder='password' />
      <select onChange={handleChange} name='role' value={ob.role}>
        <option value=''>Select a Role</option>
        <option value="admin">admin</option>
        <option value="faculty">faculty</option>
        <option value="student">student</option>
      </select>
      <button onClick={handlesubmit}>login</button>
    </div>
  )
}
