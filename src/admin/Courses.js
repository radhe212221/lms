import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
export default function Courses() {
  const a = useSelector(s => s.courses)
  const dispatch = useDispatch()
  const [ob1, setob1] = useState({ name: "", price: "", days: "" })
  const [ob2, setob2] = useState({ id: 0, name: "", price: "", days: "" })

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
    dispatch({ type: "courses", payload })
    toast("addded")
  }

  const edit = (x) => {
    setob2(x)
  }

  const update = () => {
    let payload = a.map(x => x.id === ob2.id ? ob2 : x)
    dispatch({ type: "courses", payload })
    toast("updated")
  }

  const del = (index) => {
    let payload = a.filter((x, i) => i !== index)
    dispatch({ type: "courses", payload })
    toast("deleted")

  }

  return (
    <div className='wrapper'>
      <h3>courses/courses</h3>
      <div className='form'>
        <input placeholder='name' name='name' value={ob1.name} onChange={handleChange1} />
        <input placeholder='price' name='price' value={ob1.price} onChange={handleChange1} />
        <input placeholder='days' name='days' value={ob1.days} onChange={handleChange1} />
        <button onClick={insert}>insert</button>
      </div>

      {ob2?.id > 0 && <div className='form'>
        <h3>edit : {ob2.id}</h3>
        <input placeholder='name' name='name' value={ob2.name} onChange={handleChange2} />
        <input placeholder='price' name='price' value={ob2.price} onChange={handleChange2} />
        <input placeholder='days' name='days' value={ob2.days} onChange={handleChange2} />
        <button onClick={update}>update</button>
      </div>
      }
      <h3>All courses : {a.length}</h3>
      <div className='overflow'>
        <table cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>days</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {a.map((x, i) => <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.price}</td>
              <td>{x.days}</td>
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
