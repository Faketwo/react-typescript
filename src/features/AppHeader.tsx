import { Layout } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import useLanguage from '../app/useLanguage'

const { Header } = Layout

const AppHeader: React.FC = () => {
  const location = useLocation()
  const { pathname } = location
  const { t } = useLanguage()

  const decideTitle = () => {
    switch (pathname) {
      case '/react-typescript/':
        return t('home')
      case '/react-typescript/clock':
        return t('clock')
      case '/react-typescript/language':
        return t('language')
      case '/react-typescript/counter':
        return t('counter')
      case '/react-typescript/carousel':
        return t('carousel')
      case '/react-typescript/notification':
        return t('notification')
      default:
        return 'No title'
    }
  }

  return (
    <Header className='site-layout-sub-header-background' style={{ padding: 0 }}>
      <h1 style={{ paddingLeft: '16px', color: 'blue' }}>{decideTitle()}</h1>
    </Header>
  )
}

export default AppHeader
