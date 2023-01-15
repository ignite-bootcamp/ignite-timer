import { Outlet } from 'react-router-dom'
import { Header } from '@ui/Header'

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
