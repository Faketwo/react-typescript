import React from 'react'
import useLanguage from '../app/useLanguage'

const Home: React.FC = () => {
  const { t } = useLanguage()
  return <h1>{t('hello')}</h1>
}

export default Home
