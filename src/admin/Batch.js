import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Batch() {
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

  // id,sid,fid,cid,slot_id,createdAt,p,reason,approved_by,remarks,created_by
  return (
    <div className='wrapper'>
      <h2>batch page</h2>
      <div className='batch'>
        <div className='item1'>
          <h3>slots {slots?.length}</h3>
          <div className='o-scroll'>
            {slots?.map(x => <div key={x.name}>{x.name}</div>)}
          </div>
        </div>

        <div className='item1'>
          <h3>student {student?.length}</h3>
          <div className='o-scroll'>
            {student?.map(x => <div key={x.name}>{x.name}</div>)}
          </div>
        </div>
        <div className='item1'>
          <h3>courses {courses?.length}</h3>
          <div className='o-scroll'>
            {courses?.map(x => <div key={x.name}>{x.name}</div>)}
          </div>
        </div>
        <div className='item1'>
          <h3>faculty {faculty?.length}</h3>
          <div className='o-scroll'>
            {faculty?.map(x => <div key={x.name}>{x.name}</div>)}
          </div>
        </div>
        <div className='item2'>
          <h3>batch {batch?.length}</h3>
          table...
        </div>

      </div>
    </div>
  )
}
