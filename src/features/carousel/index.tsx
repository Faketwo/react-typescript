import { Carousel } from 'antd'
import React from 'react'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const App = () => {
  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide)
  // }

  return (
    <Carousel>
      <div>
        <h3 style={contentStyle}>{'=>'}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{'==='}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{'==='}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{'<=='}</h3>
      </div>
    </Carousel>
  )
}

export default App
