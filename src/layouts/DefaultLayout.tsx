import { Outlet } from 'react-router-dom'
import { Header } from '@ui/Header'
import { Suspense } from 'react'

export default function DefaultLayout() {
  return (
    <div className="max-w-6xl h-[calc(100vh-10rem)] my-20 mx-auto p-10 bg-neutral-800 rounded-lg flex flex-col">
      <Header />
      <Suspense fallback={<p>loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
