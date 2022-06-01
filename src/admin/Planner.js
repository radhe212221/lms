import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getThisMonthCalendar, onlythismonthbatches } from '../utils'
import { hasBatch, getBatch } from '../utils'
import { useDate } from '../hooks'
import { toast } from 'react-toastify'
export default function Planner() {
  const [isopen, setisopen] = useState(false)
  const [day, setday] = useState(0)
  const { y, m, d } = useDate()
  const state = useSelector(s => s)
  const { batch } = state
  let a = getThisMonthCalendar()
  let batchesThisMonth = onlythismonthbatches(batch, y, m)

  const handleclick = x => {
    if (getBatch(x, batchesThisMonth).length) {
      setday(x)
      setisopen(true)
    }
    else {
      toast("no batch on this date")
    }

  }
  return (
    <div className='planner'>
      <div className={isopen ? 'cal active' : "cal"}>
        {a?.map(x => <div onClick={() => handleclick(x)} key={x} className={`cal-item ${hasBatch(x, batchesThisMonth) ? 'active' : ''}`}>{x} - {getBatch(x, batchesThisMonth).length}</div>)}
      </div>
      <div className='modal'>
        <h3>batch {getBatch(day, batchesThisMonth).length}</h3>
        <div className='overflow'>
          <table cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>date</th>
                <th>time</th>
                <th>course</th>
                <th>faculty</th>
                <th>student</th>
              </tr>
            </thead>
            <tbody>
              {batch?.map((x, i) => <tr key={x.id}>
                <td>{new Date(x.createdAt).toJSON().slice(0, 20)}</td>
                <td>{x.slot_id}</td>
                <td>{x.cid}</td>
                <td>{x.fid}</td>
                <td>{x.sid}</td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
