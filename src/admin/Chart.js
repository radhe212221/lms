import React from 'react'
import { useSelector } from 'react-redux'
import ChartComp from '../comp/Chart'
import { chart1 } from '../utils'
export default function Chart() {
  const state = useSelector(s => s)
  const data = chart1(state)
  return (
    <div>
      <ChartComp data={data} />
    </div>
  )
}
