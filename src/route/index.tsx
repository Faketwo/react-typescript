import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clock from '../features/clock'
import Counter from '../features/counter'
import Contact from './Contact'
import Home from './Home'
import Product from './Product'

const AppRouter: React.FC = () => (
  <Routes>
    <Route path='/react-typescript/clock' element={<Clock />} />
    <Route path='/react-typescript/product' element={<Product />} />
    <Route path='/react-typescript/contact' element={<Contact />} />
    <Route path='/react-typescript/counter' element={<Counter />} />
    <Route path='/react-typescript' element={<Home />} />
  </Routes>
)

export default AppRouter
