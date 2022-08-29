import {
  AreaChartOutlined,
  ClockCircleOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const Sidebar: React.FC = () => {
  const labelList = ['home', 'about', 'product', 'contact', 'counter']
  const navigate = useNavigate()

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
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
          UserOutlined,
          ClockCircleOutlined,
        ].map((icon, index) => ({
          key: labelList[index],
          icon: React.createElement(icon),
          label: `${labelList[index]}`,
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
