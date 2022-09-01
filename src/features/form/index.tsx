import { Button, Form, Input, InputNumber } from 'antd'
import React from 'react'
import { updateUserItem } from '../../app/firebase'
import { DataType } from '../table/slice'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
/* eslint-enable no-template-curly-in-string */

type Props = {
  modalData: DataType | null
}

const FormComp: React.FC<Props> = ({ modalData }) => {
  type FormData = {
    name: string
    age: number
  }

  const onFinish = (value: FormData) => {
    const updateData = {
      ...value,
      key: modalData?.key,
    }
    updateUserItem(updateData)
  }

  return (
    <Form {...layout} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name='name'
        label='Name'
        rules={[{ required: true }]}
        initialValue={modalData?.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='age'
        label='Age'
        rules={[{ type: 'number', min: 0, max: 99 }]}
        initialValue={modalData?.age}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormComp
