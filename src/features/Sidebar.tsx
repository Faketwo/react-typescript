import {
  AreaChartOutlined,
  ClockCircleOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useLanguage from '../app/useLanguage'

const { Sider } = Layout

const Sidebar: React.FC = () => {
  const labelList = ['home', 'clock', 'language', 'counter', 'carousel', 'notification']
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      // onBreakpoint={(broken) => {
      //   console.log(broken)
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type)
      // }}
    >
      <div className='logo' />
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['home']}
        items={[
          HomeOutlined,
          AreaChartOutlined,
          FundProjectionScreenOutlined,
          ClockCircleOutlined,
          ClockCircleOutlined,
          ClockCircleOutlined,
        ].map((icon, index) => ({
          key: labelList[index],
          icon: React.createElement(icon),
          label: `${t(labelList[index])}`,
          onClick: function ({ key }) {
            if (key === 'home') navigate('/react-typescript/')
            else navigate(`/react-typescript/${key}`)
          },
        }))}
      />
    </Sider>
  )
}

export default Sidebar
