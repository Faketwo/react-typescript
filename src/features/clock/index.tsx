import React from 'react'
import useClock from './hook'

const Clock: React.FC = () => {
  const dateString = useClock()

  return (
    <>
      <h3>現在時間:</h3>
      <time>{dateString}</time>
    </>
  )
}

export default Clock
