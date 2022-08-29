import { Button, Col, InputNumber, Layout, Row } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decrement, increment, incrementByAmount, selectCount } from './slice'

const Counter: React.FC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState(2)
  const incrementValue = Number(incrementAmount) || 0
  const onChange = (value: number) => {
    setIncrementAmount(value)
  }

  return (
    <Layout>
      <Row>
        <Col span={10} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
            -
          </Button>
        </Col>
        <Col span={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>{count}</h2>
        </Col>
        <Col span={10} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button aria-label='Increment value' onClick={() => dispatch(increment())}>
            +
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col span={11} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <InputNumber min={1} max={10} defaultValue={2} onChange={onChange} />
        </Col>
        <Col span={2}></Col>
        <Col span={11} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default Counter
