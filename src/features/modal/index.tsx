import { Modal } from 'antd'
import React from 'react'
import FormComp from '../form'
import { DataType } from '../table/slice'

type Props = {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  modalData: DataType | null
}

const ModalComp: React.FC<Props> = ({ isModalVisible, setIsModalVisible,modalData }) => {
  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <FormComp modalData={modalData}/>
    </Modal>
  )
}

export default ModalComp
