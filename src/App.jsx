import React from 'react'
import { useRoutes } from 'react-router-dom'
import { rootRouter } from '@/routers'
export default function App() {
  return useRoutes(rootRouter)
}
