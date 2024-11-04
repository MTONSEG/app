import type { FC, ReactNode } from 'react'
import './Header.scss'

interface PropsType {
  children?: ReactNode
}

const Header: FC<PropsType> = ({ children }) => {
  return <header className='header'>{children}</header>
}

export default Header
