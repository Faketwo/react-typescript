import React from 'react'
import useLanguage from '../../app/useLanguage'
import useClock from './hook'

const Clock: React.FC = () => {
  const dateString = useClock()
  const { t } = useLanguage()

  return (
    <>
      <h3>{t('current time')}</h3>
      <time>{dateString}</time>
    </>
  )
}

export default Clock
