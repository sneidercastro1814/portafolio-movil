import { NavLink } from 'react-router-dom'

const enlaces = [
  { to: '/', texto: 'Inicio' },
  { to: '/proyectos', texto: 'Proyectos' },
  { to: '/contacto', texto: 'Contacto' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      {enlaces.map(({ to, texto }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {texto}
        </NavLink>
      ))}
    </nav>
  )
}