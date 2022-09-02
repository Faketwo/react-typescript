import { Button, Space, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { getUserList } from '../../app/firebase'
import { useAppSelector } from '../../app/hooks'
import ModalComp from '../modal'
import { DataType, selectTable } from './slice'

const { Column } = Table

const TableComp: React.FC = () => {
  const tableData = useAppSelector(selectTable)

  useEffect(() => {
    getUserList()
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalData, setModalData] = useState<DataType | null>(null)

  const showModal = (record: DataType) => {
    if (!tableData) return
    setModalData(record)
    setIsModalVisible(true)
  }

  const newUserKey = (tableData as DataType[])?.length + 1

  const createUserData = {
    address: 'Sidney No. 1 Lake Park',
    age: 0,
    key: newUserKey,
    name: '',
    tags: ['cool', 'teacher'],
  }

  return (
    <>
      <Table dataSource={tableData}>
        <Column title='Name' dataIndex='name' key='name' />
        <Column title='Age' dataIndex='age' key='age' />
        <Column
          title='Tags'
          dataIndex='tags'
          key='tags'
          render={(tags: string[]) => (
            <>
              {tags.map((tag) => (
                <Tag color='blue' key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title='Action'
          key='action'
          render={(_: unknown, record: DataType) => (
            <Space size='middle'>
              <a onClick={showModal.bind(this, record)}>Edit</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
      <Button type='primary' onClick={showModal.bind(this, createUserData)}>
        Add a new person
      </Button>
      {isModalVisible && (
        <ModalComp
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          modalData={modalData}
        />
      )}
    </>
  )
}

export default TableComp
