import { useEffect, useState } from 'react'

export default function WorkspaceDate({ full = false }) {
  const [today, setToday] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  return today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    ...(full ? { year: 'numeric' } : {}),
  })
}
