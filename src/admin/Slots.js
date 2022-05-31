import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
export default function Slots() {
  const a = useSelector(s => s.slots)
  const dispatch = useDispatch()
  const [ob1, setob1] = useState({ name: "", })
  const [ob2, setob2] = useState({ id: 0, name: "", })

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
    dispatch({ type: "slots", payload })
    toast("addded")
  }

  const edit = (x) => {
    setob2(x)
  }

  const update = () => {
    let payload = a.map(x => x.id === ob2.id ? ob2 : x)
    dispatch({ type: "slots", payload })
    toast("updated")
  }

  const del = (index) => {
    let payload = a.filter((x, i) => i !== index)
    dispatch({ type: "slots", payload })
    toast("deleted")

  }

  return (
    <div className='wrapper'>
      <h3>slots/slots</h3>
      <div className='form'>
        <input placeholder='name' name='name' value={ob1.name} onChange={handleChange1} />
        <button onClick={insert}>insert</button>
      </div>

      {ob2?.id > 0 && <div className='form'>
        <h3>edit : {ob2.id}</h3>
        <input placeholder='name' name='name' value={ob2.name} onChange={handleChange2} />
        <button onClick={update}>update</button>
      </div>
      }
      <h3>All slots : {a.length}</h3>
      <div className='overflow'>
        <table cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {a.map((x, i) => <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
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
