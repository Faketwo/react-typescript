import { Button, notification } from 'antd'
import React from 'react'
import useLanguage from '../../app/useLanguage'

const openNotification = (message: string, description: string) => {
  notification.open({
    message,
    description,
    onClick: () => {
      console.log('Notification Clicked!')
    },
  })
}

const NotificationComp: React.FC = () => {
  const { t } = useLanguage()
  const message = t('notification title')
  const description = t('notification content')

  return (
    <Button type='primary' onClick={openNotification.bind(this, message, description)}>
      {t('notification open')}
    </Button>
  )
}

export default NotificationComp
