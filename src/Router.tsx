import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'))

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
