import React from 'react'
import { useSelector } from 'react-redux'
import { getThisMonthCalendar, onlythismonthbatches } from '../utils'
import { hasBatch, getBatch } from '../utils'
import { useDate } from '../hooks'
export default function Planner() {
  const { y, m, d } = useDate()
  const state = useSelector(s => s)
  const { batch } = state
  let a = getThisMonthCalendar()
  let batchesThisMonth = onlythismonthbatches(batch, y, m)
  return (
    <div>
      <div className='cal'>
        {a?.map(x => <div key={x} className={`cal-item ${hasBatch(x, batchesThisMonth) ? 'active' : ''}`}>{x} - {getBatch(x, batchesThisMonth).length}</div>)}
      </div>
    </div>
  )
}
