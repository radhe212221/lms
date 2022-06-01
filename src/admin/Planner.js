import React from 'react'
import { getThisMonthCalendar } from '../utils'
export default function Planner() {
  let a = getThisMonthCalendar()
  return (
    <div>
      <div className='cal'>
        {a?.map(x => <div key={x} className='cal-item'>{x}</div>)}
      </div>
    </div>
  )
}
