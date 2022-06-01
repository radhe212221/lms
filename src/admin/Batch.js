import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { checkExistingbatch } from '../utils'
export default function Batch() {
  const dispatch = useDispatch()
  const state = useSelector(s => s)
  const { student, faculty, courses, slots, batch, role } = state

  const [ob, setob] = useState({
    id: batch?.length + 1,
    sid: "",
    fid: "",
    cid: "",
    slot_id: "",
    createdAt: Date.now(),
    p: false,
    reason: "",
    approved_by: "",
    remarks: "",
    created_by: role
  })

  const p1 = (e, sname, scname) => {
    setob({ ...ob, sid: sname, cid: scname })
  }

  const p2 = (e, name) => {
    e.preventDefault()
    setob({ ...ob, slot_id: name })
  }

  const p3 = (e, name) => {
    e.preventDefault()
    setob({ ...ob, slot_id: name })
    if (checkExistingbatch(batch, ob)) {
      toast("batch already exists")
    }
    else {
      let payload = [...batch, ob]
      dispatch({ type: "batch", payload })
      toast("new batch created")
    }
  }

  const del = i => {
    let payload = batch.filter((item, idx) => idx !== i)
    dispatch({ type: "batch", payload })
  }


  const handlefid = name => {
    setob({ ...ob, fid: name })
  }
  // id,sid,fid,cid,slot_id,createdAt,p,reason,approved_by,remarks,created_by
  return (
    <div className='wrapper'>
      <h2>batch page</h2>
      <div className='batch'>
        <div className='item1'>
          <h3>slots {slots?.length}</h3>
          <div className='o-scroll'>
            {slots?.map(x => <div onDragOver={e => p2(e, x.name)} onDrop={e => p3(e, x.name)} className={x.name === ob.slot_id ? "active" : ""} key={x.name}>{x.name}</div>)}
          </div>
        </div>

        <div className='item1'>
          <h3>student {student?.length}</h3>
          <div className='o-scroll'>
            {student?.map(x => <div draggable={true} onDragStart={(e) => p1(e, x.name, x.course)} className={x.name === ob.sid ? "active" : ""} key={x.name}>{x.name}</div>)}
          </div>
        </div>
        <div className='item1'>
          <h3>courses {courses?.length}</h3>
          <div className='o-scroll'>
            {courses?.map(x => <div className={x.name === ob.cid ? "active" : ""} key={x.name}>{x.name}</div>)}
          </div>
        </div>
        <div className='item1'>
          <h3>faculty {faculty?.length}</h3>
          <div className='o-scroll'>
            {faculty?.map(x => <div onClick={() => handlefid(x.name)} className={x.name === ob.fid ? "active" : ""} key={x.name}>{x.name}</div>)}
          </div>
        </div>
        <div className='item2'>
          <h3>batch {batch?.length}</h3>
          <div className='overflow'>
            <table cellPadding={10} cellSpacing={0}>
              <thead>
                <tr>
                  <th>date</th>
                  <th>time</th>
                  <th>course</th>
                  <th>faculty</th>
                  <th>student</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {batch?.map((x, i) => <tr key={x.id}>
                  <td>{new Date(x.createdAt).toJSON().slice(0,20)}</td>
                  <td>{x.slot_id}</td>
                  <td>{x.cid}</td>
                  <td>{x.fid}</td>
                  <td>{x.sid}</td>
                  <td>
                    <button onClick={() => del(i)}><img width={10} src="/del.png" /></button>
                  </td>
                </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
