import { Layout } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

const { Header } = Layout

const AppHeader: React.FC = () => {
  const location = useLocation()
  const { pathname } = location

  const decideTitle = () => {
    switch (pathname) {
      case '/react-typescript/':
        return 'Home'
      case '/react-typescript/about':
        return 'About'
      case '/react-typescript/product':
        return 'Product'
      case '/react-typescript/contact':
        return 'Contact'
      case '/react-typescript/counter':
        return 'Counter'
      default:
        return 'None'
    }
  }

  return (
    <Header className='site-layout-sub-header-background' style={{ padding: 0 }}>
      <h1 style={{ paddingLeft: '16px', color: 'blue' }}>{decideTitle()}</h1>
    </Header>
  )
}

export default AppHeader
