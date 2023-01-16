import classnames from 'classnames'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={igniteLogo} alt="" />
      <nav className="flex items-center gap-2">
        <NavLink
          to="/"
          title="Timer"
          className={({ isActive }) =>
            classnames(
              'w-12 h-12 flex justify-center items-center text-neutral-200 border-b-emerald-600 border-t-transparent hover:border-b-2 hover:border-t-2',
              {
                'text-emerald-600': isActive,
              },
            )
          }
        >
          <Timer size={24} aria-hidden="true" />
        </NavLink>
        <NavLink
          to="/history"
          title="Histórico"
          className={({ isActive }) =>
            classnames(
              'w-12 h-12 flex justify-center items-center text-neutral-200 border-b-emerald-600 border-t-transparent hover:border-b-2 hover:border-t-2',
              {
                'text-emerald-600': isActive,
              },
            )
          }
        >
          <Scroll size={24} aria-hidden="true" />
        </NavLink>
      </nav>
    </header>
  )
}
