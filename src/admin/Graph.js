import React from 'react'
import { useSelector } from 'react-redux'
import ChartComp from '../comp/Chart'
import { chart2 } from '../utils'
export default function Graph() {
  const state = useSelector(s => s)
  const data = chart2(state)
  return (
    <div>
      <ChartComp data={data} />
    </div>
  )
}
