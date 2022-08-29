import { useEffect, useState } from 'react'

const useClock = () => {
  const [timeString, setTimeString] = useState('數字鐘啟動中')

  useEffect(() => {
    const id = setInterval(() => {
      const currentTime = new Date()
      const localeTimeString = currentTime.toLocaleTimeString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      })

      // 顯示當地GMT時區
      const timezoneOffset = currentTime.getTimezoneOffset()
      const timeZone = Math.abs(timezoneOffset) / 60
      const timeZoneSign = timezoneOffset > 0 ? '-' : '+'

      setTimeString(`${localeTimeString} GMT${timeZoneSign}${timeZone}`)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return timeString
}

export default useClock
