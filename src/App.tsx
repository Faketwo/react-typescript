import { Layout } from 'antd'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppFooter from './features/AppFooter'
import AppHeader from './features/AppHeader'
import Sidebar from './features/Sidebar'
import AppRouter from './route'

const { Content } = Layout

const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Sidebar />
      <Layout>
        <AppHeader />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 700 }}>
            <AppRouter />
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  </BrowserRouter>
)

export default App
