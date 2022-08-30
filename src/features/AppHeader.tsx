import { Layout } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import useLanguage from '../app/useLanguage'

const { Header } = Layout

const AppHeader: React.FC = () => {
  const location = useLocation()
  const { pathname } = location
  const pathnameSplit = pathname.split('/')
  const { t } = useLanguage()

  const decideTitle = () => {
    // 錯誤的URL
    if (pathnameSplit.length < 3) return 'No title'

    // 首頁
    if (!pathnameSplit[2]) return t('home')

    // 除了首頁的其他頁面
    return t(pathnameSplit[2])
  }

  return (
    <Header className='site-layout-sub-header-background' style={{ padding: 0 }}>
      <h1 style={{ paddingLeft: '16px', color: 'blue' }}>{decideTitle()}</h1>
    </Header>
  )
}

export default AppHeader
