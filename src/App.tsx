import { Layout } from 'antd'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppHeader from './features/AppHeader'
import Sidebar from './features/Sidebar'
import AppRouter from './route'

const { Content, Footer } = Layout

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
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  </BrowserRouter>
)

export default App
