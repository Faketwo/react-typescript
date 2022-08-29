import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clock from '../features/clock'
import Counter from '../features/counter'
import Language from '../features/language'
import Home from './Home'

const AppRouter: React.FC = () => (
  <Routes>
    <Route path='/react-typescript/clock' element={<Clock />} />
    <Route path='/react-typescript/language' element={<Language />} />
    <Route path='/react-typescript/counter' element={<Counter />} />
    <Route path='/react-typescript' element={<Home />} />
  </Routes>
)

export default AppRouter
