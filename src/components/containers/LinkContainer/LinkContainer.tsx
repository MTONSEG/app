import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import './LinkContainer.scss'

interface LinkItem {
  to: string
  icon: ReactNode
  label: string
}

interface LinkContainerProps {
  links: LinkItem[]
  className?: string
}

const LinkContainer: FC<LinkContainerProps> = ({ links }) => (
  <div className='link-container'>
    {links.map(({ to, icon, label }) => (
      <NavLink to={to} className='link-container__link' end key={to}>
        {icon} <span>{label}</span>
      </NavLink>
    ))}
  </div>
)

export default LinkContainer
