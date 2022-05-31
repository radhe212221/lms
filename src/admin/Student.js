import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
export default function Student() {
  const a = useSelector(s => s.student)
  const dispatch = useDispatch()
  const [ob1, setob1] = useState({ phone: "", course: "", name: "", email: "", password: "" })
  const [ob2, setob2] = useState({ id: 0, phone: "", course: "", name: "", email: "", password: "" })

  const handleChange1 = e => {
    let { name, value } = e.target
    setob1({ ...ob1, [name]: value })

  }

  const handleChange2 = e => {
    let { name, value } = e.target
    setob2({ ...ob2, [name]: value })

  }

  const insert = () => {
    let payload = [...a, { ...ob1, id: a.length + 1 }]
    dispatch({ type: "student", payload })
    toast("addded")
  }

  const edit = (x) => {
    setob2(x)
  }

  const update = () => {
    let payload = a.map(x => x.id === ob2.id ? ob2 : x)
    dispatch({ type: "student", payload })
    toast("updated")
  }

  const del = (index) => {
    let payload = a.filter((x, i) => i !== index)
    dispatch({ type: "student", payload })
    toast("deleted")

  }

  return (
    <div className='wrapper'>
      <h3>student/student</h3>
      <div className='form'>
        <input placeholder='name' name='name' value={ob1.name} onChange={handleChange1} />
        <input placeholder='email' name='email' value={ob1.email} onChange={handleChange1} />
        <input placeholder='password' name='password' value={ob1.password} onChange={handleChange1} />
        <input placeholder='phone' name='phone' value={ob1.phone} onChange={handleChange1} />
        <input placeholder='course' name='course' value={ob1.course} onChange={handleChange1} />
        <button onClick={insert}>insert</button>
      </div>

      {ob2?.id > 0 && <div className='form'>
        <h3>edit : {ob2.id}</h3>
        <input placeholder='name' name='name' value={ob2.name} onChange={handleChange2} />
        <input placeholder='email' name='email' value={ob2.email} onChange={handleChange2} />
        <input placeholder='password' name='password' value={ob2.password} onChange={handleChange2} />
        <input placeholder='phone' name='phone' value={ob2.phone} onChange={handleChange2} />
        <input placeholder='course' name='course' value={ob2.course} onChange={handleChange2} />
        <button onClick={update}>update</button>
      </div>
      }
      <h3>All student : {a.length}</h3>
      <div className='overflow'>
        <table cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>password</th>
              <th>phone</th>
              <th>course</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {a.map((x, i) => <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.phone}</td>
              <td>{x.course}</td>
              <td>
                <button onClick={() => edit(x)}><img width={10} src="/edit.png" /></button>
                <button onClick={() => del(i)}><img width={10} src="/del.png" /></button>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
