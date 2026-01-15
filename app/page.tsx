'use client'

import { useState, useEffect } from 'react'
import TaskFlowApp from './app'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>FlowCraft App is Loading...</div>
  }

  return <TaskFlowApp />
}
