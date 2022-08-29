import { Button } from 'antd'
import React from 'react'
import useLanguage from '../../app/useLanguage'

const Language: React.FC = () => {
  const { t, changeLanguage } = useLanguage()

  return (
    <>
      <h1>{t('switch language')}</h1>
      <div>
        <Button shape="round" onClick={changeLanguage.bind(this, 'en')}>English</Button>
        <Button shape="round" onClick={changeLanguage.bind(this, 'zh-tw')}>中文</Button>
        <Button shape="round" onClick={changeLanguage.bind(this, 'jp')}>日本語</Button>
      </div>
    </>
  )
}

export default Language
